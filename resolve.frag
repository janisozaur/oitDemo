#version 420
#extension GL_ARB_shader_image_load_store : require


layout (early_fragment_tests) in;
layout (r32ui) uniform uimage2D counterImage;


out  vec4 colorOut;


void main(void)
{
	ivec2 coord = ivec2(gl_FragCoord.xy);
	uint n = imageLoad(counterImage, coord).x;

	uvec3 temp;
	temp.x = n % 256u;
	n = n / 256u;

	temp.y = n % 256u;
	n = n / 256u;

	temp.x = n % 256u;
	n = n / 256u;

	colorOut = vec4(vec3(temp) / vec3(255.0), 1.0);
}
