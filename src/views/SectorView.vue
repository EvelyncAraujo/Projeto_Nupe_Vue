<template>
  <section class="section is-main-section">
    <div class="is-vcentered">
      <select-sector
        v-if="editing"
        :sector="currentSector"
        @cancelEdit="cancelEdit"
      />
      <create-sector
        v-else-if="creating"
        @createSector="createSector"
      ></create-sector>
      <list-sector
        v-else
        :value="value"
        @createSector="createSector"
        @editSector="editSector"
      />
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import ListSector from '@/components/register/Sector/ListSector'
import CreateSector from '@/components/register/Sector/CreateSector'
import SelectSector from '@/components/register/Sector/SelectSector'

export default {
  components: { ListSector, CreateSector, SelectSector },
  setup() {
    const editing = ref(false)
    const currentSector = ref({})
    const creating = ref(false)
    const value = ref('')

    const createSector = () => {
      creating.value = true
    }

    const editSector = (sector) => {
      editing.value = true
      currentSector.value = sector
    }

    const cancelEdit = () => {
      editing.value = false
      currentSector.value = {}
    }

    return {
      editing,
      currentSector,
      creating,
      value,
      createSector,
      editSector,
      cancelEdit
    }
  }
}
</script>
