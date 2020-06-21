<template>
  <section class="function">
    <div class="title has-text-centered">{{ ageLabel }}</div>
    <b-field :label="ageLabel">
      <b-select
        :value="ageId"
        expanded
        @input="setAge"
        placeholder="Select a value..."
      >
        <option v-for="(age, key) in levels.age" :key="key" :value="age.value">
          {{ age.group }}
        </option>
      </b-select>
    </b-field>
    <div class="title has-text-centered">
      {{ functionalityLabel }}
    </div>
    <b-field :label="frailtyLabel">
      <b-select
        :value="frailtyId"
        expanded
        @input="setFrailty"
        placeholder="Select a value..."
      >
        <option
          v-for="(frailty, key) in levels.frailty"
          :key="key"
          :value="frailty.value"
        >
          {{ frailty.value }} - {{ frailty.group }}
        </option>
      </b-select>
      <template slot="message">
        <div class="frailty" v-html="frailty && frailty.description"></div>
      </template>
    </b-field>
    <b-field :label="ecogLabel" :message="ecog && ecog.description">
      <b-select
        :value="ecogId"
        expanded
        @input="setEcog"
        placeholder="Select a value..."
      >
        <option
          v-for="(ecog, key) in levels.ecog"
          :key="key"
          :value="ecog.value"
        >
          {{ ecog.value }} - {{ ecog.group }}
        </option>
      </b-select>
    </b-field>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex"
import { levels } from "../store/consts"

export default {
  data: () => ({
    levels,
  }),
  computed: {
    ...mapState({
      ageId: ({ initialAssessment }) => initialAssessment.age,
      frailtyId: ({ initialAssessment }) => initialAssessment.frailty,
      ecogId: ({ initialAssessment }) => initialAssessment.ecog,
    }),
    ...mapGetters(["ageBracket", "functionalityBracket"]),
    age() {
      return levels.age[this.ageId]
    },
    frailty() {
      return levels.frailty[this.frailtyId]
    },
    ecog() {
      return levels.ecog[this.ecogId]
    },
    ageLabel() {
      const ageValue = this.ageBracket
      const suffix = ageValue ? ` (${ageValue})` : ""
      return "Age" + suffix
    },
    functionalityLabel() {
      const suffix = this.functionalityBracket
        ? ` (${this.functionalityBracket})`
        : ""
      return "Function" + suffix
    },
    frailtyLabel() {
      const suffix =
        this.frailty && this.frailty.score ? ` (${this.frailty.score})` : ""
      return "Clinical Frailty" + suffix
    },
    ecogLabel() {
      const suffix = this.ecog && this.ecog.score ? ` (${this.ecog.score})` : ""
      return "ECOG Performance Status" + suffix
    },
  },
  methods: {
    ...mapMutations(["setAge", "setFrailty", "setEcog"]),
  },
}
</script>

<style>
.frailty strong {
  text-decoration: underline;
  font-weight: normal;
}
</style>
