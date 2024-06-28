<script setup lang="ts">
import Frequency from "./components/Frequency.vue";
import { getRandoms } from "./test/getRandoms.ts";
import { OnClickedParam } from "./utils/types/OnClickedParam.ts";

const randomData = getRandoms();

const onClicked = (data: OnClickedParam<(typeof randomData)[0]>) => {
  console.log(data);
};
</script>
<template>
    <Frequency
      :data="randomData"
      date-param="date"
      @onClicked="onClicked"
      :label="
        (date: Date, qty: number) =>
          `${qty} contributions in ${date.toLocaleDateString()}`
      "
      size="l"
    >
    </Frequency>
</template>
