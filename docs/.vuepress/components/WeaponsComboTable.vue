<template>
    <table>
        <tr v-for="(row, i) in weaponsComboTable">
            <td style="padding: 4px" v-for="(el, j) in getComboTableRow(i)">
                <img :src="getComboTableElement(i, j)">
            </td>
        </tr>
    </table>
</template>

<script>
    import weaponsComboTable from '../public/data/weaponsComboTable.json';

    const tableSize = weaponsComboTable.length;

	export default {
  name: "WeaponsComboTable",
  computed: {
      tableSize() {
          return tableSize;
      },
      weaponsComboTable() {
          return weaponsComboTable;
      }
  },
  methods: {
    getComboTableRow(i) {
        return weaponsComboTable[i];
    },
    getComboTableElement(i, j) {
        return `/assets/images/icons/${i === 0 || j === 0 ? 'weapons' : 'legends'}/${weaponsComboTable[i][j]}.png`;
    }
  }
};
</script>