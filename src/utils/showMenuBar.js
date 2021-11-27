const pagesWithoutMenuBar = ['/login', '/cadastro', '/esqueci-minha-senha'];

export default function showMenuBar(pathName) {
  return !pagesWithoutMenuBar.includes(pathName);
}
