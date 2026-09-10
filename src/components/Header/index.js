import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <h2>Bem-vindo ao Perfil</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/bio">Bio</Link>
      </nav>
    </header>
  );
}