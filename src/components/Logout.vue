<template>
    <div>
    </div>
</template>
<script>
import { AUTH_LOGOUT } from '@/store/actions/auth'

export default {
    name: 'Logout',
    created () {
        this.$store.dispatch(AUTH_LOGOUT)
        this.$router.push('/')
    }
}
</script>
