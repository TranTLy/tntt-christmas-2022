import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <div>
                TNTT Giáo xứ Chánh Thiện - Đoàn Đaminh Savio
            </div>
            <div>
                Chiến dịch <span className={s.name}>"Tâm tình mùa Giáng Sinh 2022"</span>
            </div>
        </header>
    );
};

export default Header;