<script>
export default {
    data() {
        return {

            menuItems: [
                { text: 'Home', link: '/' },
                { text: 'estudante ', link: '/student' },
                { text: 'setor', link: '/sector' },
                { text: 'atendimento', link: '/atendimento' },
                { text: 'campos', link: '/campos' },
                { text: 'Instituição', link: '/instituição' },
            ]
        };
    }
};
</script>

<template>
    <nav class="menu">
        <ul>
            <li v-for="item in menuItems" :key="item.text">
                <a :href="item.link">{{ item.text }}</a>
            </li>
        </ul>
    </nav>
</template>

<style>
.menu {
    background-color: #325c32a9;
    padding: 10px;
}

.menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;

}

.menu li {
    margin-right: 20px;
}

.menu a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    
}

.menu a:hover {
    text-decoration: underline;
}
</style>