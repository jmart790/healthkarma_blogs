<template>
	<b-navbar class="app-header border-bottom" id="navbar" toggleable="lg">
		<b-navbar-brand href="https://app.healthkarma.org/" class="hk_logo" />
		<!-- <div v-if="isMobile" class="ml-auto mt-2 mr-4 my-account__mobile"></div> -->
		<b-navbar-toggle class="border-0" target="nav-collapse" />
		<b-collapse 
			id="nav-collapse" 
			is-nav class="mr-3" 
			role="navigation"
		>
			<div class="ml-auto">
				<b-navbar-nav class="d-flex align-items-center">
					<!-- Nav states for all other users -->
						<b-nav-item
							href="https://app.healthkarma.org/search"
							class="text-capitalize">
							search providers
						</b-nav-item>
						<b-nav-item href="https://app.healthkarma.org/faq">
							FAQs
						</b-nav-item>
				</b-navbar-nav>
			</div>
		</b-collapse>
	</b-navbar>
</template>

<script>

	export default {
		data() {
			return {
        isMobile: null,
			};
		},
		created() {
			if (process.client) {
				this.resizeRecalculate();
				window.addEventListener('resize', this.resizeRecalculate);
			}
		},
		methods: {
      resizeRecalculate() {
        this.isMobile = window.innerWidth < 1025;
      },
		},
	};
</script>

<style lang="scss">
.app-header {
	z-index: 10;
	min-height: 50px;
	padding: 8px 16px;
	background-color: $white;
	@media screen and (min-width: 992px) {
		padding: 8px 24px;
	}
}

		// nav
		.navbar-nav {
			text-align: right;
			margin-right: 0.3rem;

			.nav-link {
				font-size: 16px;
				font-weight: bold;
				line-height: 29px;
				padding: 3px 2rem;
				transition: 0.3s;
				color: $black-light !important;
			}

			.nav-item {
				margin: 0 5px;
			}

			.active,
			.active > a,
			.activeDropDown > a,
			.nav-link:hover {
				color: $salmon !important;
			}

			.icon-chevron-down {
				font-size: 15px;
			}

		}

		@media (max-width: 991px) {
			.drop-down
			> a {
				padding: 0;

				> span {
					display: none;
				}
			}
			.drop-down-items {
				display: inline-block !important;
			}
			.my-account__web {
				display: none;
			}
		}

		@media (min-width: 992px) {
			.drop-down {
				position: relative;

				.drop-down-items {
					position: absolute;
					background-color: $white;
					z-index: 2;
					width: -webkit-max-content;
					width: -moz-max-content;
					width: max-content;
					right: 12px;
					top: 45px;
					padding-right: 1rem !important;
					padding-bottom: 1rem !important;
					border-radius: 0 0 10px 10px;
					box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
					animation: slide-up 0.4s ease;
				}
			}
		}
		@keyframes slide-up {
			0% {
				opacity: 0;
				transform: translateY(20px);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}

	.my-account__mobile {
		a {
			color: rgba(0, 0, 0, 0.5);
		}

		@media (min-width: 992px) {
			display: none;
		}
	}
</style>
