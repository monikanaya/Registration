// HomePage.js
import React from 'react';

function HomePage({ user, onLogout }) {
    if (!user) {
        return <p > Please log in to access this page. < /p>;
    }

    return ( <
        div >
        <
        h2 > Welcome { user.fullName } < /h2> <
        p > Email: { user.email } < /p> <
        p >
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt UT Labor Et Dolore Magna Aliquyam Erat, Sed Diam <
        /p> <
        button onClick = { onLogout } > Logout < /button> <
        /div>
    );
}

export default HomePage;