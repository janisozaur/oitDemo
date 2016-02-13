#version 420
#extension GL_ARB_shader_image_load_store : require


layout (early_fragment_tests) in;
layout (r32ui) uniform uimage2D counterImage;


out  vec4 colorOut;


void main(void)
{
	ivec2 coord = ivec2(gl_FragCoord.xy);
	uint n = imageLoad(counterImage, coord).x;

	colorOut = vec4(vec3(float(n) / 32.0), 1.0);
}
