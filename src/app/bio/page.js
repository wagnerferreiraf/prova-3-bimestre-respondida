import Link from 'next/link';
import styles from './page.module.css';

export default function Bio() {
  return (
    <>
      {<main>
        <h1>Biografia</h1>

        <p>
          Somos alunos do curso técnico em Informática do IFRO, Campus
          Vilhena, cursando o segundo ano e cada vez mais envolvidos com
          desenvolvimento front-end, especialmente com React e Next.js.
        </p>
        <p>
          Nosso objetivo é aprofundar os conhecimentos em desenvolvimento web full-stack e, no futuro, atuar como desenvolvedores(as) de
          aplicações modernas e acessíveis.
        </p>

        <Link href="/" className={styles.link}>
          Voltar para o início
        </Link>
      </main>}
    </>
  );
}