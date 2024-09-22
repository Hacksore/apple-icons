import { promises as fs } from "node:fs";

const applications = [
  // NOTE: WTF these are in an asset file
  // { name: "System Settings" },
  // { name: "Photo Booth" },
  // { name: "Calendar" },
  { name: "Xcode", iconName: true, user: true },
  { name: "Weather" },
  { name: "VoiceMemos", iconName: "MacAppIcon" },
  { name: "TV" },
  { name: "Tips" },
  { name: "Time Machine" },
  { name: "TextEdit" },
  { name: "Stocks" },
  { name: "Stickies" },
  { name: "Siri" },
  { name: "Shortcuts" },
  { name: "Safari", customPath: "/System/Volumes/Preboot/Cryptexes/App/System/Applications/Safari.app/Contents/Resources/AppIcon.icns" },
  { name: "Reminders" },
  { name: "QuickTime Player" },
  { name: "Preview" },
  { name: "Podcasts" },
  { name: "Photos" },
  { name: "Passwords" },
  { name: "Notes" },
  { name: "News" },
  { name: "Music" },
  { name: "Motion", user: true },
  { name: "Mission Control" },
  { name: "Messages" },
  { name: "Maps" },
  { name: "Mail", iconName: "ApplicationIcon" },
  { name: "Launchpad" },
  { name: "Keynote", user: true },
  { name: "iPhone Mirroring" },
  { name: "Image Capture" },
  { name: "Home" },
  { name: "GarageBand", user: true },
  { name: "Freeform" },
  { name: "Font Book" },
  { name: "FindMy", iconName: "AppIcon" },
  { name: "Final Cut Pro", user: true },
  { name: "FaceTime" },
  { name: "Dictionary", iconName: "AppIconLoc" },
  { name: "Contacts", iconName: true },
  { name: "Clock" },
  { name: "Chess" },
  { name: "Calculator" },
  { name: "Books" },
  { name: "Automator" },
  { name: "App Store" },
]

for (const app of applications) {
  let filename = "";

  if (typeof app.iconName === "string") {
    filename = app.iconName;
  } else if (app.iconName) {
    filename = app.name
  } else {
    filename = "AppIcon"
  }

  let fp = `${!app?.user ? "/System" : ""}/Applications/${app.name}.app/Contents/Resources/${filename}.icns`

  if (app.customPath) {
    fp = app.customPath
  }

  try {
    const icon = await fs.readFile(fp);
    // write to download folder
    await fs.writeFile(`/Users/hacksore/Downloads/icons/${app.name}.icns`, icon);
  } catch (e) {
    console.error(`[Error] ${app.name}: ${e.message}`);
  }

}

