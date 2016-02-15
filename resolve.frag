#version 400
#extension GL_ARB_explicit_attrib_location : require
#extension GL_ARB_shader_image_load_store : require
#extension GL_ARB_shader_storage_buffer_object : require


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
	// farthest (largest depth value) first
	OITData sorted[maxCount];

	while (idx != 0) {
		OITData candidate = data[idx];

		int insertPoint = int(count);
		while (insertPoint > 0) {
			if (sorted[insertPoint - 1].depth < candidate.depth) {
				break;
			}

			sorted[insertPoint] = sorted[insertPoint - 1];

			insertPoint--;
		}

		if (insertPoint < maxCount) {
		sorted[insertPoint] = candidate;
		}

		if (count < maxCount) {
		count++;
		}

		idx = candidate.prev;
	}

	if (count > 0) {
		colorOut = vec4(0.0, 0.0, 0.0, 0.0);

		for (uint i = 0; i < count; i++) {
			uint n = sorted[count - 1 - i].color;

	uvec4 temp;
	temp.r = n % 256u;
	n = n / 256u;

	temp.g = n % 256u;
	n = n / 256u;

	temp.b = n % 256u;
	n = n / 256u;

	temp.a = n;

			vec4 tempF = vec4(temp) / vec4(255.0);

			colorOut = mix(colorOut, tempF, tempF.a);
		}
	} else {
		colorOut = vec4(0.0, 0.0, 0.0, 1.0);
	}
}
