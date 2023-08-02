import axios from 'axios';
import run from './schema';


export const login = () => function sender(data: object) {
  return run({
    url: "http://api.escaperoom.ir/api/auth/generate",
    data: { mobile: "09016612827" },
  });
}