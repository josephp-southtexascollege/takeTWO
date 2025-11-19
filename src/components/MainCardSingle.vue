<script setup>
import { faker } from '@faker-js/faker';
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();
const jobtitle = faker.person.jobTitle();
const bio = faker.lorem.lines(2);
const username = faker.internet.username({ firstName: firstname, lastName: lastname }).toLowerCase();
</script>

<template>
     <div class="border border-gray-400 rounded-t-xl shadow bg-gray-200 h-full">
          <img class="object-fill h-480 w-960 rounded-t-xl" v-bind:src="faker.image.urlLoremFlickr({category: 'cars', height: 480, width: 960})" />
          <div class="p-4">
               <p class="mb-2 text-2xl font-bold ">{{ firstname }} {{ lastname  }} </p>
               <p class="mb-3 font-normal text-gray-700 ">{{ jobtitle }}</p>
               <p class="mb-3 font-nornaml text-gray-700 ">{{ bio }}</p>
          </div>
     </div>
</template>