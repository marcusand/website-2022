<script lang="ts">
  import personData from '$content/person.yaml';
  const { description } = personData;
</script>

<h1>Home</h1>
<p>{@html description}</p>
