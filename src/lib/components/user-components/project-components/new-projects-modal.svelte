<script lang="ts">
	import new_projects_icon from '$lib/assets//new_projects_icon.svg';
	import close_icon from '$lib/assets/close_icon.svg';
	import { scale } from 'svelte/transition';

	export let showModal = false;
</script>

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="absolute left-0 right-0 top-0 bottom-0 bg-[#00000050] z-10 flex justify-center items-center"
		on:click|self={() => (showModal = false)}
	>
		<div
			class="w-[610px] h-[361px] bg-submain py-[45px] px-[54px] relative shadow-lg shadow-black"
			in:scale
		>
			<div class="absolute top-0 right-0">
				<button class="mr-[18px] mt-[19px]" on:click={() => (showModal = false)}>
					<img src={close_icon} alt="close-icon" class="" />
				</button>
			</div>

			<img src={new_projects_icon} alt="new-project-icon" class="mx-auto" />
			<span class="font-bold text-[20px] mt-[13px] text-main"
				>Ask the host for the code, then enter it here.</span
			>

			<div class="mt-[30px] flex flex-col gap-[7px]">
				<label for="new-project-input" class="text-[15px] text-main">Enter Project Code</label>
				<input
					id="new-project-input"
					type="text"
					class="h-[43px] outline-none border-[2px] rounded-[10px] bg-submain border-main px-[20px] text-main"
				/>
			</div>

			<div class="mt-[27px] flex justify-end">
				<button class="font-bold text-[18px] text-submain py-[10px] w-[114px] rounded-[5px] bg-main"
					>JOIN</button
				>
			</div>
		</div>
	</div>
{/if}
