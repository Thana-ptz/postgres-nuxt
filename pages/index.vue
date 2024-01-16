<template>
  <main
    class="relative flex flex-col items-center justify-center min-h-screen py-10"
  >
    <h1
      class="pt-4 pb-8 bg-gradient-to-br dark:from-white from-black via-[#707070] to-[#ffffff] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      THANA Business
    </h1>
    <Table :users="data?.users" :duration="data?.duration" />
  
        
    <div class="flex flex-col grow">
    
      <a
        href="https://github.com/vercel/examples/tree/main/storage/postgres-nuxt"
        class="flex items-center h-8 mt-auto space-x-2 bottom-20 right-20"
      >
        <img src="/thana-business.svg" alt="THANA Business Logo" class="h-6 dark:invert" />
        <p class="font-light">THANA Business</p>
      </a>
    </div>
  </main>
</template>

<script setup>
const { data } = useFetch('/api/users')
</script>
