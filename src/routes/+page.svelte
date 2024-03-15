<script lang="ts">
	import header_icon from '$lib/assets/header_icon.svg';
	import CreateAccount from '$lib/components/login-components/create-account.svelte';
	import ForgotPassword from '$lib/components/login-components/forgotpassword.svelte';
	import { loginComponent } from '$lib';
	import SuccessModal from '$lib/components/login-components/success-modal.svelte';
	import { goto } from '$app/navigation';

	const footerLanguage = [
		'English',
		'Español',
		'日本',
		'語한국어',
		'中文(简体)',
		'Português',
		'(Brasil)',
		'Français',
		'(France)',
		'Deutsch'
	];

	let showModal = false;
</script>

<!--Show Success-->
<SuccessModal bind:showModal />

<!--Show Forgot Password and Create Account-->
{#if $loginComponent.showForgotPass}
	<ForgotPassword />
{:else if $loginComponent.showCreateAccount}
	<CreateAccount />
{/if}

<div class="h-[1024px] bg-main">
	<div class="flex flex-col items-center">
		<div class="mt-[69px] mx-auto">
			<img src={header_icon} alt="header-icon" />
		</div>

		<div class="mt-[85px] w-[437px]">
			<div class="flex flex-col gap-[26px]">
				<input
					type="email"
					class="h-[55px] rounded-lg py-[17px] px-[26px]"
					placeholder="Enter your Email"
				/>
				<input
					type="password"
					class="h-[55px] rounded-lg py-[17px] px-[26px]"
					placeholder="Enter your Password"
				/>
				<button
					class="bg-submain h-[55px] flex justify-center items-center font-bold text-[20px] text-main rounded-lg"
					on:click={() => goto('/dashboard')}
					>LOG IN
				</button>
			</div>

			<div class="flex items-center justify-center mt-[17px]">
				<button
					class="text-submain font-normal text-[16px]"
					on:click={() => ($loginComponent.showForgotPass = true)}>Forgot Password?</button
				>
			</div>

			<hr class="mt-[50px]" />

			<button
				class="bg-[#8E7E60] w-full h-[55px] flex justify-center items-center font-semibold text-[20px] rounded-lg mt-[26px] text-white"
				on:click={() => ($loginComponent.showCreateAccount = true)}>Create New Account</button
			>
		</div>
	</div>

	<footer class="mt-[129px] h-[101px] bg-submain w-full flex items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-[11px]">
			<div class="flex items-center gap-[19px]">
				{#each footerLanguage as selections}
					<button class="text-main font-light text-[14px]">{selections}</button>
				{/each}
			</div>
			<hr class="w-[837px] bg-main border-[1px] border-main" />

			<span class="font-light text-[14px] text-main text-center">Collab Learn © 2024</span>
		</div>
	</footer>
</div>
