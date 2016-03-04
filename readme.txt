
	Order Independent Transparency Demo

This is a small program demonstrating order independent transparency effect as described by Christoph Kubisch in "Order Independent Transparency In OpenGL 4.x" http://on-demand.gputechconf.com/gtc/2014/presentations/S4385-order-independent-transparency-opengl.pdf

Building
========

Linux: Go to /binaries and type make. To change build settings copy example.mk to local.mk in the same directory. You only need to include changed lines in local.mk.

Windows: There is a Visual Studio 2013 solution in /windows/SMAADemo.sln. You will need SDL2 headers and Windows libraries.


Usage
=====

Command line options:
"--gles" - Use OpenGL ES.
"--gldebug" - Enable OpenGL debugging.
"--noinstancing" - Disable instancing.
"--dsa <mode>" - Select DSA mode: "arb", "ext", "none".
"--glmajor <version>" - Specify OpenGL major version.
"--glminor <version>" - Specify OpenGL minor version.
"--width <value>" - Specify window width.
"--height <value>" - Specify window height.

Key commands:
A - Toggle antialiasing on/off
C - Re-color cubes
D - Cycle through debug visualizations. Hold SHIFT to cycle in opposite direction.
F - Toggle fullscreen
H - Print help
Q - Cycle through AA quality levels. Hold SHIFT to cycle in opposite direction.
V - Toggle vsync
SPACE - Toggle camera rotation
ESC - Quit


Third-party software
====================

GLEW (http://glew.sourceforge.net)
GLM (OpenGL Mathematics) (http://glm.g-truc.net/0.9.7/)
TCLAP (http://tclap.sourceforge.net)


Authors
=======

Turo Lamminen turotl@gmail.com
Tuomas Närväinen tuomas.narvainen@alternativegames.net


Copyright and License
=====================

Copyright (c) 2016 Alternative Games Ltd / Turo Lamminen

This code is licensed under the MIT license (see license.txt).
