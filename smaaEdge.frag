#version 330
#extension GL_ARB_gpu_shader5 : enable
#extension GL_ARB_texture_gather : enable


#define SMAA_RT_METRICS screenSize
#define SMAA_GLSL_3 1
#define SMAA_PRESET_ULTRA 1

uniform vec4 screenSize;

#include "utils.h"

#define SMAA_INCLUDE_PS 1
#define SMAA_INCLUDE_VS 0

#include "smaa.h"


uniform sampler2D color;


in vec2 texcoord;
in vec4 offset0;
in vec4 offset1;
in vec4 offset2;


void main(void)
{
	vec4 offsets[3];
	offsets[0] = offset0;
	offsets[1] = offset1;
	offsets[2] = offset2;
	gl_FragColor = vec4(SMAAColorEdgeDetectionPS(texcoord, offsets, color), 0.0, 0.0);
}
