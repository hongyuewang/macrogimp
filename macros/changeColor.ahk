CoordMode, Mouse, Screen
SysGet, Xmin, 76 	; XVirtualScreenleft  	; left side of virtual screen
SysGet, Ymin, 77	; YVirtualScreenTop		; Top side of virtual screen

SysGet, VirtualScreenWidth, 78
SysGet, VirtualScreenHeight, 79

Xmax := Xmin + VirtualScreenWidth
Ymax := Ymin + VirtualScreenHeight

x := Round(Xmax * 0.1)
y := Round(Ymax * 0.47)

CoordMode, Mouse, Screen
Click %x%, %y%  ;65, 530