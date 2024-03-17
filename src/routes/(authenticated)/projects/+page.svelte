<script lang="ts">
	import search_icon from '$lib/assets/search_icon.svg';
	import { authComponent } from '$lib';

	import ProjectCard from '$lib/components/user-components/project-components/project-card.svelte';
	import CreateProject from '$lib/components/user-components/project-components/create-project.svelte';

	$authComponent.activeItem = '/projects';

	let showCreateProject = true;
</script>

<div class="bg-submain min-h-screen pt-[49px] px-[58.5px] relative">
	{#if showCreateProject}
		<CreateProject />
	{/if}
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-[24px]">
			<button
				class="bg-main text-submain font-semibold text-[16px] rounded-[23.5px] py-[14px] px-[23px] w-[161px]"
				on:click={() => (showCreateProject = true)}>NEW PROJECT</button
			>

			<button
				class="bg-main text-submain font-semibold text-[16px] rounded-[23.5px] py-[14px] px-[23px] w-[161px]"
				>REFRESH</button
			>
		</div>

		<div class="bg-black relative w-[373px] flex items-center">
			<input
				type="text"
				placeholder="SEARCH PROJECT NAME"
				class="py-[14.5px] px-[20px] text-[15px] font-medium italic w-full"
			/>
			<div class="absolute right-0 top-0 bottom-0 flex items-center justify-center">
				<button class="mr-[12px]">
					<img src={search_icon} alt="search-icon" class="" />
				</button>
			</div>
		</div>
	</div>

	<hr class="mt-[33px] border-[1px] border-main" />

	<div class="mt-[54px] flex flex-wrap gap-x-[50px] gap-y-[30px] justify-center">
		{#each ['', '', '', '', '', ''] as sample}
			<div class="w-[459px] min-h-[195px]">
				<ProjectCard />
			</div>
		{/each}
	</div>

	<div class="mt-[59px] flex justify-end">
		<div class="flex items-center gap-[14px]">
			<div class="w-[25px] h-[25px] bg-main rounded-full"></div>
			<div class="w-[25px] h-[25px] bg-[#D9D9D9] rounded-full"></div>
			<div class="w-[25px] h-[25px] bg-[#D9D9D9] rounded-full"></div>
			<div class="w-[25px] h-[25px] bg-[#D9D9D9] rounded-full"></div>
		</div>
	</div>
</div>
