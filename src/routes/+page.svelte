<script lang="ts">
	import header_icon from '$lib/assets/header_icon.svg';
	import CreateAccount from '$lib/components/login-components/create-account.svelte';
	import ForgotPassword from '$lib/components/login-components/forgotpassword.svelte';
	import SuccessModal from '$lib/components/login-components/success-modal.svelte';

	import { enhance } from '$app/forms';
	import { type SubmitFunction } from '@sveltejs/kit';
	import type { ResultModel } from '$lib/types';
	import type { Session } from '@supabase/supabase-js';
	import { fade, scale } from 'svelte/transition';
	import Loader from '$lib/components/general-components/loader.svelte';
	import { staticComponent } from '$lib';
	import { goto } from '$app/navigation';

	let showRegisterModal = false;
	let showForgotPasswordModal = false;

	type LoginVal = {
		email: string[];
		password: string[];
	};

	type LoginAction = {
		session: Session;
		msg: string;
		errors: LoginVal;
	};

	let formActionErrors: LoginVal | null = null;
	let dbErrorMsg = '';

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

	let loginLoader = false;

	const loginActionNews: SubmitFunction = () => {
		loginLoader = true;
		return async ({ result, update }) => {
			const {
				status,
				data: { session, msg, errors }
			} = result as ResultModel<LoginAction>;

			switch (status) {
				case 200:
					formActionErrors = null;
					loginLoader = false;
					goto('/dashboard');
					break;

				case 400:
					dbErrorMsg = '';
					formActionErrors = errors;
					loginLoader = false;
					break;
				case 401:
					dbErrorMsg = '';
					dbErrorMsg = msg;
					formActionErrors = null;
					loginLoader = false;
					break;
			}
			await update();
		};
	};
</script>

<SuccessModal bind:showSuccessCreateModal={$staticComponent.showSuccessCreateAccount} />

<!--Show Forgot Password and Create Account-->
{#if showForgotPasswordModal}
	<ForgotPassword
		bind:showForgotPasswordModal
		on:click={() => {
			showForgotPasswordModal = false;
			showRegisterModal = true;
		}}
	/>
{:else if showRegisterModal}
	<CreateAccount bind:showRegisterModal />
{/if}

<div class="h-[1024px] bg-main">
	<div class="flex flex-col items-center">
		<div class="mt-[69px] mx-auto">
			<img src={header_icon} alt="header-icon" />
		</div>

		<div class="mt-[85px] w-[437px]">
			<div class="flex justify-center">
				<span class="text-submain my-[20px] text-center">{dbErrorMsg}</span>
			</div>
			<form
				method="post"
				action="?/loginAction"
				enctype="multipart/form-data"
				use:enhance={loginActionNews}
				class="flex flex-col gap-[26px]"
			>
				<label class="w-full">
					{#each formActionErrors?.email ?? [] as errorMsg}
						<span class="text-submain" transition:fade>{errorMsg}</span>
					{/each}
					<input
						name="email"
						type="email"
						class="h-[55px] rounded-lg py-[17px] px-[26px] w-full"
						placeholder="Enter your Email"
					/>
				</label>

				<label class="w-full">
					{#each formActionErrors?.password ?? [] as errorMsg}
						<span class="text-submain" transition:fade>{errorMsg}</span>
					{/each}
					<input
						name="password"
						type="password"
						class="h-[55px] rounded-lg py-[17px] px-[26px] w-full"
						placeholder="Enter your Password"
					/>
				</label>

				<button
					disabled={loginLoader}
					class="bg-submain h-[55px] flex justify-center items-center font-bold text-[20px] text-main rounded-lg"
				>
					<Loader
						name="LOG IN"
						loader={loginLoader}
						loaderName="LOGGING IN..."
						color="border-b-submain"
					/>
				</button>
			</form>

			<div class="flex items-center justify-center mt-[17px]">
				<button
					class="text-submain font-normal text-[16px]"
					on:click={() => (showForgotPasswordModal = true)}>Forgot Password?</button
				>
			</div>

			<hr class="mt-[50px]" />

			<button
				class="bg-[#8E7E60] w-full h-[55px] flex justify-center items-center font-semibold text-[20px] rounded-lg mt-[26px] text-white"
				on:click={() => (showRegisterModal = true)}>Create New Account</button
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
