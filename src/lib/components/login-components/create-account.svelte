<script lang="ts">
	import close_icon from '$lib/assets/close_icon.svg';
	import { fade, scale } from 'svelte/transition';
	import Loader from '../general-components/loader.svelte';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ResultModel } from '$lib/types';
	import type { Session } from '@supabase/supabase-js';
	import { staticComponent } from '$lib';

	export let showRegisterModal = false;

	type RegisterVal = {
		firstName: string[];
		lastName: string[];
		studentId: string[];
		email: string[];
		password: string[];
		confirmPassword: string[];
	};

	type RegisterAction = {
		session: Session;
		msg: string;
		errors: RegisterVal;
	};

	let formActionErrors: RegisterVal | null = null;
	let dbErrorMsg = '';
	let registerLoader = false;

	const registerActionNews: SubmitFunction = () => {
		registerLoader = true;
		return async ({ result, update }) => {
			const {
				status,
				data: { session, msg, errors }
			} = result as ResultModel<RegisterAction>;

			switch (status) {
				case 200:
					showRegisterModal = false;
					$staticComponent.showSuccessCreateAccount = true;
					registerLoader = false;
					break;

				case 400:
					dbErrorMsg = '';
					formActionErrors = errors;
					registerLoader = false;
					break;
				case 401:
					dbErrorMsg = '';
					dbErrorMsg = msg;
					formActionErrors = null;
					registerLoader = false;
					break;
			}
			await update();
		};
	};
</script>

<div
	class="fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center bg-[#00000050]"
>
	<form
		method="post"
		action="?/registerAction"
		enctype="multipart/form-data"
		use:enhance={registerActionNews}
		class="min-h-[739px] w-[826px] bg-submain relative flex flex-col px-[50px] py-[43px] shadow-lg shadow-black"
		in:scale
	>
		<button
			type="button"
			class="absolute top-0 right-0 mr-[38px] mt-[28px]"
			on:click={() => ($staticComponent.showCreateAccount = false)}
		>
			<img src={close_icon} alt="close-icon" class="" />
		</button>

		<div class="flex flex-col">
			<span class="font-bold text-[32px] text-main w-full">Create New Account</span>
			<span class="w-full font-medium text-[20px] text-main">Let's collab to each other!</span>

			<hr class="mt-[8px] border-[1px] border-main" />
		</div>

		<div class="mt-[35px] px-[17px] flex flex-col gap-[28px]">
			<div class="w-full flex items-center gap-[20px]">
				<label class="w-full">
					{#each formActionErrors?.firstName ?? [] as errorMsg}
						<span class="text-main" transition:fade>{errorMsg}</span>
					{/each}
					<input
						name="firstName"
						type="text"
						class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
						placeholder="First Name"
					/>
				</label>

				<label class="w-full">
					{#each formActionErrors?.lastName ?? [] as errorMsg}
						<span class="text-main" transition:fade>{errorMsg}</span>
					{/each}
					<input
						name="lastName"
						type="text"
						class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
						placeholder="Last Name"
					/>
				</label>
			</div>

			<labeL>
				{#each formActionErrors?.studentId ?? [] as errorMsg}
					<span class="text-main" transition:fade>{errorMsg}</span>
				{/each}
				<input
					name="studentId"
					type="text"
					class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
					placeholder="Student ID"
				/>
			</labeL>

			<label>
				{#each formActionErrors?.email ?? [] as errorMsg}
					<span class="text-main" transition:fade>{errorMsg}</span>
				{/each}
				<input
					name="email"
					type="email"
					class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
					placeholder="Email Address"
				/>
			</label>

			<label>
				{#each formActionErrors?.password ?? [] as errorMsg}
					<span class="text-main" transition:fade>{errorMsg}</span>
				{/each}
				<input
					name="password"
					type="password"
					class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
					placeholder="Password"
				/>
			</label>

			<label>
				{#each formActionErrors?.confirmPassword ?? [] as errorMsg}
					<span class="text-main" transition:fade>{errorMsg}</span>
				{/each}
				<input
					name="confirmPassword"
					type="password"
					class="h-[55px] rounded-lg border-[2px] outline-none border-main bg-submain px-[25px] w-full font-light text-[20px] text-main"
					placeholder="Re-Enter Password"
				/>
			</label>
		</div>

		<div class="mt-[39px] flex justify-center">
			<button
				disabled={registerLoader}
				class="rounded-[27.5px] bg-main font-bold text-[20] text-white py-[15.5px] flex justify-center w-[262px]"
			>
				<Loader name="SIGN UP" loader={registerLoader} loaderName="Creating ..." />
			</button>
		</div>
	</form>
</div>

<style>
	::-ms-input-placeholder {
		/* Edge 12-18 */
		color: #800000;
	}

	::placeholder {
		color: #800000;
	}
</style>
