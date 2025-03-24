import { config } from '../store/config.js'

export function getToken(): string | undefined {
  return config.get('tokens.jwt');
}

export function setToken(token: string): void {
  config.set('tokens.jwt', token);
}

export function clearToken(): void {
  config.delete('tokens.jwt');
}