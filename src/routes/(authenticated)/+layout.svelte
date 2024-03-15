<script lang="ts">
	import NavHeader from '$lib/components/user-components/nav-header.svelte';
	import { authComponent } from '$lib';

	const selections = [
		{
			title: 'DASHBOARD',
			url: '/dashboard'
		},

		{
			title: 'GUILDS',
			url: '/guilds'
		},

		{
			title: 'PROJECTS',
			url: '/projects'
		},

		{
			title: 'LEARNING MODULES',
			url: '/learning-modules'
		},

		{
			title: 'WORKSPACES',
			url: '/workspaces'
		}
	];
</script>

<NavHeader />

<div class="flex">
	<div class="w-[341px] bg-[#691D1F] flex flex-col pt-[49px] transition-all">
		{#each selections as selection}
			<a
				href={selection.url}
				class=" text-[21px] py-[32.5px] text-center hover:font-bold hover:text-[#E9BA46] transition-all {$authComponent.activeItem ===
				selection.url
					? 'bg-[#911F1F] font-bold text-[#E9BA46]'
					: 'text-white'}"
				on:click={() => {
					$authComponent.activeItem = selection.url;
				}}>{selection.title}</a
			>
		{/each}
	</div>

	<div class="w-full">
		<slot />
	</div>
</div>
