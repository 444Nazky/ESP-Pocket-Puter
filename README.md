# 🎮 ESP Pocket Puter

<div align="center">

![ESP32](https://img.shields.io/badge/ESP32-C3-FF6B35?style=for-the-badge&logo=espressif&logoColor=white)
![PlatformIO](https://img.shields.io/badge/PlatformIO-圆形?style=for-the-badge&logo=platformio&logoColor=fff)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

*A compact ESP32-based Flipper Zero alternative with display, buttons, buzzer, infrared, and RF support.*

<img src="https://i.imgur.com/P2nhIcZ.jpeg" width="500">

**⚡ Scan networks | 📶 Bluetooth tools | 📺 IR remote | 📻 RF scanner | 🎵 Music player**

</div>

---

## ✨ Features

### 🧠 Core System
- 🎛️ **Menu-driven UI** — Navigate with 3 buttons (Up, Ok, Down)
- 📺 **OLED Display** — 128x64 SSD1306 I2C screen
- 🔌 **Modular architecture** — Easy to extend with new modules

### 📡 Wi-Fi Module
| Feature | Description |
|---------|-------------|
| 📶 Network Scanner | Discover nearby WiFi networks |
| 🎭 Beacon Spammer | Create fake APs / Captive portals |
| 📡 Evil Twin | Clone & redirect networks |

### 📶 Bluetooth Module
| Feature | Description |
|---------|-------------|
| 🔍 Device Scanner | Find nearby Bluetooth devices |
| ⚡ FastPair Spam | Annoy friends with FastPair popups |
| 🍎 Sour Apple | iPhone proximity spam |

### 📺 Infrared Module
| Feature | Description |
|---------|-------------|
| 📺 TV-B-Gone | Turn off any TV instantly |
| 🎛️ Universal Remote | Control TVs, projectors, ACs |
| ⚡ IR Spammer | Flood with IR signals |

### 📻 RF Module (CC1101)
| Feature | Description |
|---------|-------------|
| 📡 Frequency Scanner | Identify unknown RF signals |
| 🔒 Jammer | *⚠️ Use responsibly — illegal in most countries* |
| 📥 Code Grabber | Capture & replay RF signals |
| 🚗 Tesla Port Opener | Open Tesla charge ports |

### 🎵 Music Module
- 🔊 Beep Test
- 🎵 Built-in Songs (DOOM, Nokia, Tetris)
- 🎹 Mini 3-Key Piano

---

## 🛠️ Hardware

### Required Components
| Component | Purpose |
|-----------|---------|
| ESP32-C3 Super Mini | Main controller |
| SSD1306 128x64 OLED | Display (I2C) |
| IR Transmitter | Send infrared signals |
| CC1101 RF Module | 433MHz+ RF support |
| Passive Buzzer | Audio output |
| 3x Buttons | Input (Up/Ok/Down) |
| LiPo Battery + Protection | Portable power |

### Pinout
```cpp
// Full pin definitions in src/global.hpp
// Easy to customize for your setup!
```

### Wiring Diagram
<img src="https://i.imgur.com/hySwcIf.png" width="400">

---

## 🚀 Getting Started

### Prerequisites
- [PlatformIO IDE](https://platformio.org/install/ide?install=vscode) for VS Code
- ESP32-C3 board (or any ESP32 variant)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/444Nazky/ESP-Pocket-Puter.git
cd ESP-Pocket-Puter

# 2. Open in PlatformIO
# File → Open Folder → select this repo

# 3. Customize pinout (optional)
# Edit src/global.hpp if using different pins

# 4. Connect ESP32 via USB and flash!
pio run --target upload
```

### First Boot
1. Power on the device
2. Navigate the menu with Up/Down buttons
3. Press Ok to select
4. Long-press Ok for submenus

---
<!-- Last updated: 2026-09-12T10:13:41+07:00 -->

## 📁 Project Structure

```
ESP-Pocket-Puter/
├── src/
│   ├── main.cpp          # Entry point
│   ├── global.hpp        # Pin definitions & config
│   ├── menu/             # Menu system
│   ├── wifi/             # WiFi module
│   ├── bluetooth/        # Bluetooth module
│   ├── ir/              # Infrared module
│   ├── rf/              # RF module (CC1101)
│   └── music/            # Music player
├── platformio.ini       # PlatformIO config
├── LICENSE
└── README.md
```

---

## 🎨 Screenshots

<details>
<summary>📸 Click to view gallery</summary>

| Main Menu | WiFi Scanner |
|-----------|--------------|
| <img src="https://i.imgur.com/menu.png" width="200"> | <img src="https://i.imgur.com/wifi.png" width="200"> |

| IR Remote | RF Scanner |
|-----------|-----------|
| <img src="https://i.imgur.com/ir.png" width="200"> | <img src="https://i.imgur.com/rf.png" width="200"> |

</details>

---

## 🤝 Contributing

Contributions welcome! Please follow these style rules:

| Type | Convention | Example |
|------|------------|---------|
| Variables | `snake_case` | `my_variable` |
| Global Functions | `PascalCase` | `SPI_Test()` |
| Class Methods | `PascalCase` | `AddItem()` |
| Comments | ❌ Avoid | Code should be self-explanatory |

---

## ⚠️ Disclaimer

> This project is for **educational purposes only**. 
> The RF jammer feature is **illegal** in most countries.
> **Use responsibly** and only on devices you own.

---

## 📜 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🙏 Credits

- [DevEclipse](https://github.com/DevEclipse1) — Original project inspiration
- [Flipper Zero](https://flipperzero.one/) — Feature inspiration

---

<div align="center">

⭐ Star this repo if you found it useful! ⭐

**Made with 💚 by [Nazky](https://github.com/444Nazky)**

<!-- Updated: 2026-09-12T10:31:14+07:00 -->
</div>
