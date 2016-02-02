#version 330


in vec3 colorFrag;


out vec4 colorOut;


void main(void)
{
	vec4 temp;
	temp.xyz = colorFrag;
	temp.w = 0.5;
	colorOut = temp;
}
