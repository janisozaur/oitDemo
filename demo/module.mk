sp             := $(sp).x
dirstack_$(sp) := $(d)
d              := $(dir)


FILES:= \
	# empty line


oitDemo_MODULES:=
oitDemo_SRC:=$(dir)/oitDemo.cpp


oitDemo_MODULES+=glew


PROGRAMS+= \
	oitDemo \
	# empty line

SRC_$(d):=$(addprefix $(d)/,$(FILES))


d  := $(dirstack_$(sp))
sp := $(basename $(sp))
