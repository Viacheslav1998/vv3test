<template>
  <div class="wp-cards p-[32px] flex justify-center bg-zinc-400">
    <div class="w-[80%]">
      <!-- title line -->
      <div class="wp-space w-full bg-[url('/part2/m24.jpg')] bg-cover bg-stone-300 p-20 mt-20 mb-20">
        <h4 class="text-5xl text-orange-600">this is where you'll get to know the company.</h4>
        <p class="border-b border-slate-900 pl-1" :class="sizeFont">History, Influence, Success ...</p>
      </div>
      <div class="p-[50px] overflow-auto h-[400px] bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
        style="background-image:url('/part2/about.jpg');">
        <div class="mt-40">
          <div class="bg-white p-4 sm:p-8">
            <div
              class="font-inter text-2xl font-extrabold tracking-tight text-black">
              About our company
            </div>
            <div class="mt-1 text-sm font-medium text-slate-500">
              adventures in the designated areas
            </div>
            <p class="mt-4 leading-7 text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates laboriosam reiciendis asperiores sequi animi ipsa, adipisci, provident veniam corrupti modi tenetur id repellendus tempore eos. Id esse possimus doloremque deleniti.
            </p>
            <p class="mt-4 leading-7 text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ab hic totam, beatae ea saepe eos, placeat laudantium inventore magni odio suscipit? Minus, optio maiores? Quasi, odio maxime. Tempore, molestiae?
              Necessitatibus facere at iure ea odit, asperiores quaerat. Quos iste distinctio quis excepturi? Eveniet consequuntur ducimus quo sunt beatae, repudiandae asperiores vero veniam porro, mollitia optio. Enim, sapiente? Molestiae, dolorem.
              Hic fugiat quos modi repellat rem vitae qui, nam ab facilis blanditiis asperiores veritatis harum incidunt nihil odit necessitatibus dignissimos soluta eos neque illum iusto fugit distinctio magnam. Optio, repellat?
              Saepe rem facilis repudiandae iure? Ex facilis aut rem ipsam delectus odio soluta, consequatur amet ab laboriosam asperiores, voluptatibus natus. Exercitationem, assumenda tenetur. Eius adipisci officia obcaecati nulla facilis consequatur?
              Saepe quod beatae nulla consequuntur iste placeat magnam magni aspernatur quis, consectetur dolorum repellat eius. Dolor exercitationem minima repellendus laborum magni ipsa vitae harum dolore, architecto laboriosam sequi assumenda? Soluta.
              Dolores similique reprehenderit voluptates nemo rem neque quibusdam inventore ad in atque excepturi expedita cupiditate mollitia natus quis hic nobis odit accusantium, fugit voluptatem, saepe est totam recusandae? Nostrum, minus!
              Porro in ut, iusto ipsum autem ab ullam, distinctio laboriosam eius voluptatum, sint repellendus velit quas illo nam tenetur aut libero quae quam aspernatur deleniti? Atque architecto dolor provident voluptates.
              Aperiam reiciendis voluptatum sed perspiciatis! A et quo dolores quia atque fuga vitae sunt ea aspernatur, repudiandae quas dolorem inventore esse laudantium veritatis similique aliquid libero quae ipsam asperiores eos!
              Iure aspernatur ab nostrum expedita labore corrupti perspiciatis eius earum debitis iusto! Ipsa itaque ipsum dolore porro delectus, explicabo tempore repudiandae aperiam nemo ratione optio a. Dolores saepe doloribus repellat!
              Temporibus veniam perferendis odit? Aliquam error beatae autem aut odio ratione voluptatibus fugit maxime ipsa, inventore temporibus tenetur, repellat unde delectus reiciendis amet tempora quidem dolores exercitationem quae sit quam?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    sizeFont: {
      type: String, 
      required: true,
    }
  });
</script>