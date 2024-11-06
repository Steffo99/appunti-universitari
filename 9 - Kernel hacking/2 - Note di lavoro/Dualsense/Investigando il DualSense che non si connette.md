## Situazione iniziale

### uname

```uname
Linux nitro 6.11.3-zen1-1-zen #1 ZEN SMP PREEMPT_DYNAMIC Thu, 10 Oct 2024 20:11:02 +0000 x86_64 GNU/Linux
```

### Accoppiamento

```journald
Oct 24 23:39:15 nitro systemd[764]: Reached target Bluetooth.
Oct 24 23:39:19 nitro bluetoothd[659]: No matching connection for device
Oct 24 23:39:24 nitro bluetoothd[659]: profiles/input/device.c:control_connect_cb() connect to D0:BC:C1:34:FD:42: Host is down (112)
Oct 24 23:39:24 nitro bluedevil-wizard[15587]: kf.bluezqt: PendingCall Error: "br-connection-create-socket"
```

### Connessione

```journald
Oct 24 23:42:51 nitro kernel: hid-generic 0005:054C:0CE6.0008: unknown main item tag 0x0
Oct 24 23:42:51 nitro kernel: input: Wireless Controller as /devices/virtual/misc/uhid/0005:054C:0CE6.0008/input/input31
Oct 24 23:42:51 nitro kernel: hid-generic 0005:054C:0CE6.0008: input,hidraw7: BLUETOOTH HID v1.00 Gamepad [Wireless Controller] on dc:a9:71:fd:fe:ac
Oct 24 23:42:51 nitro kernel: playstation 0005:054C:0CE6.0008: unknown main item tag 0x0
Oct 24 23:42:51 nitro kernel: playstation 0005:054C:0CE6.0008: hidraw7: BLUETOOTH HID v1.00 Gamepad [Wireless Controller] on dc:a9:71:fd:fe:ac
Oct 24 23:42:51 nitro kernel: input: Wireless Controller as /devices/virtual/misc/uhid/0005:054C:0CE6.0008/input/input32
Oct 24 23:42:51 nitro kernel: input: Wireless Controller Motion Sensors as /devices/virtual/misc/uhid/0005:054C:0CE6.0008/input/input33
Oct 24 23:42:51 nitro kernel: input: Wireless Controller Touchpad as /devices/virtual/misc/uhid/0005:054C:0CE6.0008/input/input34
Oct 24 23:42:51 nitro kernel: playstation 0005:054C:0CE6.0008: Registered DualSense controller hw_version=0x00000313 fw_version=0x01040027
Oct 24 23:42:52 nitro kernel: input: Microsoft X-Box 360 pad 0 as /devices/virtual/input/input35
```

### Verdetto

Batteria scarica.
