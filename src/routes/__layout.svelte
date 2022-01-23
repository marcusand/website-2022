<svelte:head>
	<title>marcusand</title>
	<meta name="description" content="personal website of marcusand" />
	<meta
		name="keywords"
		content="marcusand, marcus, software, web, development, personal, website"
	/>
</svelte:head>

<main>
	<slot />
</main>

<style>
	:global(html),
	:global(body),
	:global(#svelte) {
		margin: 0;
		padding: 10;
	}

	:global(*) {
		box-sizing: border-box;
	}

	main {
		padding: 1rem;
	}
</style>
