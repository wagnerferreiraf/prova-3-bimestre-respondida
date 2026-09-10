'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [seguindo, setSeguindo] = useState(false);

  return (
    <>
      <main>
        <Image
          src="/images/perfil.jpg"
          alt={`Foto de perfil de nome da dupla`}
          width={150}
          height={150}
          className={styles.foto}
          loading="eager"
        />

        <h1>Nome da dupla</h1>
        <p>
          Somos estudantes do curso técnico em Informática do IFRO,apaixonados por tecnologia e desenvolvimento web.
        </p>

        <button className={styles.botao} onClick={() => setSeguindo(!seguindo)}>
          {seguindo ? 'Seguindo' : 'Seguir'}
        </button>

        {seguindo && <p>Agora você está seguindo Nome da dupla!</p>}

        <Link href="/bio" className={styles.link}>
          Ver biografia completa
        </Link>

      </main>

    </>
  );
}
