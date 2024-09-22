import fs from "fs";
import path from "path";
import { tmpFolder, uploadsFolder } from "../config/upload";

export class DiskStorage {
  async saveFile(file: string) {
    await fs.promises.rename(
      path.resolve(tmpFolder, file),
      path.resolve(uploadsFolder, file)
    );
  }

  async deleteFile(file: string) {
    const filePath = path.resolve(uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch (error) {
      console.log(error);
    }
    await fs.promises.unlink(filePath);
  }
}
