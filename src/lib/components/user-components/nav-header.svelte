<script lang="ts">
	import nav_header_icon from '$lib/assets/nav_header_icon.svg';
	import nav_user_icon from '$lib/assets/nav_user_icon.svg';
	import user_info_icon from '$lib/assets/user_info_icon.svg';
	import notif_icon from '$lib/assets/notif_icon.svg';
	import feedback_icon from '$lib/assets/feedback_icon.svg';
	import logout_icon from '$lib/assets/logout_icon.svg';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ResultModel } from '$lib/types';
	import { goto } from '$app/navigation';
	import Loader from '../general-components/loader.svelte';

	let showInfo = false;
	let logoutLoader = false;

	const logoutActionNews: SubmitFunction = () => {
		logoutLoader = true;
		return async ({ result, update }) => {
			const {
				status,
				data: { msg }
			} = result as ResultModel<{ msg: string }>;

			switch (status) {
				case 200:
					goto('/');
					logoutLoader = false;
					break;

				case 401:
					logoutLoader = false;
					break;
			}
			await update();
		};
	};
</script>

<nav class="h-[86px] bg-[#911F1F] flex items-center justify-between pl-[24px] pr-[37px]">
	<div class="">
		<img src={nav_header_icon} alt="nav-user-icon" class="" />
	</div>

	<div class="flex items-center gap-[29px] justify-end relative">
		<span class="font-bold text-[20px] text-white underline">MANG JUAN</span>
		<button on:click={() => (showInfo = true)}>
			<img src={nav_user_icon} alt="nav-user-icon" class="" />
		</button>

		{#if showInfo}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="fixed left-0 right-0 top-0 bottom-0 bg-[#00000050]"
				on:click={() => (showInfo = false)}
			></div>
			<div
				class="absolute w-[335px] bg-main px-[30px] pt-[18px] pb-[37px] rounded-[17px] mt-[300px] z-20"
			>
				<div class="flex justify-end w-full">
					<button on:click={() => (showInfo = false)}>
						<img src={user_info_icon} alt="logout-icon" class="" />
					</button>
				</div>

				<div class="flex flex-col gap-[13.5px] border-b-[2px] pb-[25px] border-submain">
					<button class="text-[18px] text-white flex items-center gap-[20.6px]">
						<img src={notif_icon} alt="notif-icon" class="" />
						Notification
					</button>

					<button class="text-[18px] text-white flex items-center gap-[20.6px]">
						<img src={feedback_icon} alt="notif-icon" class="" />
						Give Feedback
					</button>
				</div>

				<form
					method="post"
					action="/?/logoutAction"
					use:enhance={logoutActionNews}
					class="mt-[18px]"
				>
					<button
						class="text-[18px] text-white flex items-center gap-[20.6px]"
						disabled={logoutLoader}
					>
						<img src={logout_icon} alt="notif-icon" class="" />
						<Loader name="Log out" loader={logoutLoader} loaderName="Logging out..." />
					</button>
				</form>
			</div>
		{/if}
	</div>
</nav>
