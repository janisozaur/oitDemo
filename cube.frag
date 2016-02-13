#version 420
#extension GL_ARB_shader_image_load_store : require


layout (early_fragment_tests) in;
layout (r32ui) uniform uimage2D counterImage;
layout (offset = 0, binding = 0) uniform atomic_uint counter;


in vec3 colorFrag;


void main(void)
{
	uint idx = atomicCounterIncrement(counter) + 1;

	ivec2 coord = ivec2(gl_FragCoord.xy);
	imageAtomicExchange(counterImage, coord, idx);
}
