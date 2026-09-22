import { google } from "googleapis";
import * as fs from "fs";
import * as path from "path";

const DRIVE_FILE_ID = process.env.GOOGLE_DRIVE_FILE_ID || "";
const CREDENTIALS_PATH = process.env.GOOGLE_DRIVE_CREDENTIALS || "./credentials.json";

async function fetchResume() {
  if (!DRIVE_FILE_ID) {
    console.error("GOOGLE_DRIVE_FILE_ID environment variable is required.");
    process.exit(1);
  }

  const auth = await google.auth.getClient({
    keyFile: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({ version: "v3", auth });

  const res = await drive.files.get({
    fileId: DRIVE_FILE_ID,
    alt: "media",
  });

  const buffer = Buffer.from(res.data as Uint8Array);
  const outDir = path.join(process.cwd(), "public");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "resume.pdf"), buffer);
  console.log("Resume saved to public/resume.pdf");
}

fetchResume().catch((err) => {
  console.error("Failed to fetch resume:", err);
  process.exit(1);
});
