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

	OITData nearest;
	nearest.color = 0u;
	nearest.depth = 1.0f;
	nearest.prev = 0;

	while (idx != 0) {
		OITData candidate = data[idx];
		if (candidate.depth < nearest.depth) {
			nearest = candidate;
		}
		idx = candidate.prev;
	}

	uint n = nearest.color;
	uvec4 temp;
	temp.r = n % 256u;
	n = n / 256u;

	temp.g = n % 256u;
	n = n / 256u;

	temp.b = n % 256u;
	n = n / 256u;

	temp.a = n;

	colorOut = vec4(temp) / vec4(255.0);
}
