<script lang="ts">
	import dashboard_user_icon from '$lib/assets/dashboard_user_icon.svg';
	import DashboardCard from '$lib/components/user-components/dashboard-components/dashboard-card.svelte';
	import { onMount } from 'svelte';
	import { authComponent } from '$lib';

	$authComponent.activeItem = '/dashboard';
</script>

<div class="bg-submain min-h-screen pt-[49px] px-[58.5px]">
	<div class="bg-[#911F1F] w-full px-[49px] py-[26px]">
		<div class="flex items-center gap-[44px]">
			<div class="">
				<img src={dashboard_user_icon} alt="dashboard-user-icon" class="" />
			</div>

			<div class="flex flex-col gap-[4px] w-full">
				<span class="text-[45px] text-submain">JUAN DELA CRUZ JR.</span>
				<div class="flex flex-col gap-[10px]">
					<span class="text-submain">Student ID : 2024106789</span>
					<span class="text-submain">Year and Section : 11 - Makatao</span>
				</div>
			</div>
		</div>

		<div class="flex justify-end">
			<button
				class="text-[14px] bg-submain text-main w-[103px] py-[9px] flex justify-center items-center rounded-[19.5px]"
				>Edit Profile</button
			>
		</div>
	</div>

	<div class="mt-[50px]">
		<span class="text-[20px] font-semibold text-main">Recent Project(s)</span>
		<hr class="mt-[13px] border-[1px] border-main" />

		<div class=" mt-[39px]">
			<div class="w-full flex flex-wrap justify-center gap-[32px]">
				{#each ['', '', '', ''] as sample}
					<div class="w-[459px] h-[195px]">
						<DashboardCard />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-[60px]">
		<span class="text-[20px] font-semibold text-main">Joined Guild(s)</span>
		<hr class="mt-[13px] border-[1px] border-main" />
	</div>

	<div class="mt-[73px] flex justify-center items-center">
		<span class="text-[16px] font-semibold text-[#691D1F]">You have no guild(s) yet.</span>
	</div>
</div>
