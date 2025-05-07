import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

interface UserPreferences {
  userName: string;
  language: string;
}

@Injectable()
export class UserService {
  // In-memory storage for user preferences
  private userPreferences: Map<string, UserPreferences> = new Map();

  createUser(userName: string, language: string): { token: string } {
    const token = uuidv4();
    this.userPreferences.set(token, { userName, language });
    return { token };
  }

  getUserLanguage(token: string): string | null {
    const preferences = this.userPreferences.get(token);
    return preferences ? preferences.language : null;
  }
}