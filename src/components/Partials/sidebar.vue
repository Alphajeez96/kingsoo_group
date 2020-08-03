<template>
<div>
  <sidebar-menu :menu="menu" />

</div>
</template>


<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: '',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                       
                    },
                       {
                        href: '/tracking',
                        title: 'Tracking',
                       
                    },
                       {
                        href: '/reports',
                        title: 'Reports',
                       
                    },
                 
                 
                 
                ]
            }
        }
    }
</script>

<style >
.v-sidebar-menu .vsm--item{
    margin-top: 10px 
}
</style>