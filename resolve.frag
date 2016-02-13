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

	if (idx != 0) {
	uint n = data[idx].color;
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
