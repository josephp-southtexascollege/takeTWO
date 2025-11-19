import router from '../router';
import { getAuth, signInWithEmailAndPassword, signout } from 'firebase/auth'
import { firebaseApp } from './useFirebase'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'
import { ref } from 'vue'

const auth = getAuth(firebaseApp)
const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {
     const login = async (username, password) => { 
          await signInWithEmailAndPassword(auth, username, password)
          return isAuthenticated.value
     }
     const logout = async () => {
          await signout(auth)
          router.push({ name: 'Home' })
     }    

     return {isAuthenticated, user, login, logout}     
}