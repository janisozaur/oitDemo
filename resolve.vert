#version 420


#include "utils.h"


void main(void)
{
	vec2 unused;
	vec2 pos = triangleVertex(gl_VertexID, unused);

	gl_Position = vec4(pos, 1.0, 1.0);
}
