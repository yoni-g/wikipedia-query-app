const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/';

export interface UserRegistration {
  userName: string;
  language: string;
}

export interface RegistrationResponse {
  token: string;
}

export interface ArticleIntroduction {
  scrapeDate: number;
  articleName: string;
  introduction: string;
}

class ApiService {
  private token: string | null = null;

  constructor() {
    // Try to load token from localStorage
    this.token = sessionStorage.getItem('userToken');
  }

  isUserRegistered(): boolean {
    return !!this.token;
  }

  resetToken(): void {
    sessionStorage.removeItem('userToken')
    this.token = ''
  }

  async registerUser(data: UserRegistration): Promise<string> {
    const response = await fetch(`${API_BASE_URL}/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    const result: RegistrationResponse = await response.json();
    this.token = result.token;
    
    // Save token to localStorage
    sessionStorage.setItem('userToken', result.token);
    
    return result.token;
  }

  async getArticleIntroduction(articleName: string): Promise<ArticleIntroduction> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['x-authentication'] = this.token;
    }

    const response = await fetch(`${API_BASE_URL}/api/introduction/${articleName}`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch article introduction');
    }

    return response.json();
  }
}

export const apiService = new ApiService();