#version 430
#extension GL_ARB_shader_image_load_store : require


#include "utils.h"


layout (early_fragment_tests) in;
layout (r32ui) uniform uimage2D counterImage;
layout (std430, binding = 0) buffer oitData {
	OITData data[];
};


out  vec4 colorOut;


void main(void)
{
	ivec2 coord = ivec2(gl_FragCoord.xy);
	uint idx = imageLoad(counterImage, coord).x;

	const uint maxCount = 32u;

	uint count = 0u;
	OITData sorted[maxCount];

	while (idx != 0 && count < maxCount) {
		OITData candidate = data[idx];

		sorted[count] = candidate;
		count++;

		idx = candidate.prev;
	}

	if (count > 0) {
		// insertion sort
		for (uint i = 1; i < count; i++) {
			int j = 1;
			while (j > 0 && sorted[j - 1].depth > sorted[j].depth) {
				OITData temp = sorted[j];
				sorted[j] = sorted[j - 1];
				sorted[j - 1] = temp;
				j--;
			}
		}

	uint n = sorted[0].color;
	uvec4 temp;
	temp.r = n % 256u;
	n = n / 256u;

	temp.g = n % 256u;
	n = n / 256u;

	temp.b = n % 256u;
	n = n / 256u;

	temp.a = n;

	colorOut = vec4(temp) / vec4(255.0);
	} else {
		colorOut = vec4(0.0, 0.0, 0.0, 1.0);
	}
}
