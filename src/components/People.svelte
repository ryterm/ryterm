<script>
	import SquareImage from "./SquareImage.svelte";

	let { name, role, buttons = null } = $props();
</script>

<div
	class="flex flex-col gap-2 border border-neutral-300 dark:border-neutral-700 rounded-xl p-2"
>
	<div class="flex gap-2 justify-center items-center">
		<SquareImage
			source={`/${name}.png`}
			alt={`${name}'s photo`}
			--size={"10rem"}
		></SquareImage>
		<div class="w-xs">
			<h1 class="text-2xl font-bold underline">{name}</h1>
			<p>{role}</p>
		</div>
	</div>
	{#if buttons}
		<div
			class="flex flex-col gap-2 justify-center items-center w-full h-full"
		>
			{@render buttons?.()}
		</div>
	{:else}
		<p class="w-full h-full flex justify-center items-center italic">
			No socials
		</p>
	{/if}
</div>
