<script lang="ts">
	import PrimaryButton from "@/components/PrimaryButton.svelte";
	import SquareImage from "@/components/SquareImage.svelte";
</script>

<svelte:head>
	<title>Ryterm</title>
</svelte:head>

<section
	class="mt-20 h-[80dvh] w-full flex justify-center items-center flex-col gap-4 border-b border-b-neutral-300 dark:border-b-neutral-700"
>
	<div
		class="flex flex-col justify-center items-center w-xl text-center gap-2"
	>
		<h2 class="text-3xl font-bold">
			<span class="font-black underline">FOSS</span>, raw and real.
		</h2>
		<p>
			No ads, no payment, no dark patterns. Just the roots of free and
			open source software.
		</p>
	</div>
	<PrimaryButton
		label={"See our projects"}
		func={() => {
			window.location.href = "/projects";
		}}
	></PrimaryButton>
</section>
<section
	class="h-[80dvh] w-full flex justify-center items-center gap-8 border-b border-b-neutral-300 dark:border-b-neutral-700"
>
	<div
		class="flex flex-col justify-center items-center w-xl text-center gap-2"
	>
		<h2 class="text-3xl font-bold">
			Are you tired of <span class="font-black underline"
				>dark patterns</span
			>?
		</h2>
		<p>
			Unlike other organizations, we don’t sell your data, manipulate your
			choices, or trick you into subscriptions. We won’t hide the “no”
			button or make you agree to things you don’t want
		</p>
	</div>
	<SquareImage source={"/dark-patterns.jpeg"} alt={"Dark patterns image"}
	></SquareImage>
</section>
<section
	class="h-[80dvh] w-full flex justify-center items-center gap-8 border-b border-b-neutral-300 dark:border-b-neutral-700"
>
	<div
		class="flex flex-col justify-center items-center w-xl text-center gap-2"
	>
		<h2 class="text-3xl font-bold">
			Code that <span class="font-black underline">doesn't suck</span>.
		</h2>
		<p>
			We don't build just apps, we build code - with love. No crap code.
			No low performance. Just simplicity and quality.
		</p>
	</div>
</section>
