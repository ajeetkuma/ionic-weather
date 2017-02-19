var app = angular.module('main',[]);
	app.factory('NumaanFactory', ['$q', '$log', function($q, $log){
		var service={};

		service.removeAngularjsKey = function(targetData) {

			   var toJson = angular.toJson(targetData);
			   var fromJson = angular.fromJson(toJson);
			  
			   return fromJson;

			}
			
			service.intialize = function(con){

	         var defer = $q.defer();
	         
	         AppFormController.Intialize(function(result, event) {

                if (event.status) {
                	console.log(event);
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.ChangeProjectDetails = function(oppId,projectName,plantName,unitName){

	         var defer = $q.defer();
	         
	         AppFormController.ChangeProjectDetails(oppId,projectName,plantName,unitName,function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                	
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.genrateOTP = function(conId){

	         var defer = $q.defer();
	         
	         AppFormController.otpGenration(conId,function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                	
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.verifyOTP = function(opp,conId,otp){

	         var defer = $q.defer();
	         
	         AppFormController.otpVerification(opp,conId,otp,function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                    
                       
                } else {
                	
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
			service.saveContact = function(opp,acc,con,oppor,AppForm,unit,existinglead,lead,plant,channelpartner,flag,dateFields,oppdateFields,genralPowerofAttorney){

	         var defer = $q.defer();
	         console.log(opp);
			 console.log(acc);
			 console.log(con);
			 console.log(oppor);
			 console.log(AppForm);
			 console.log(unit);
			 console.log(existinglead);
			 console.log(lead);
			 console.log(plant);
			 console.log(channelpartner);
			 console.log(flag);
			 console.log(dateFields);
			 console.log(oppdateFields);
			 console.log(genralPowerofAttorney);
			 if(existinglead == undefined) {
				existinglead = null; 
			 }
			 
			 /*if(lead == '') {
				 lead = null;
			 }
			 if(channelpartner == '')  {
				 channelpartner = null;
			 }*/
			 
	         AppFormController.saveContacts(opp,acc,con,oppor,AppForm,unit,existinglead,lead,plant,channelpartner,flag,dateFields,oppdateFields,genralPowerofAttorney,function(result, event) {
					
                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                	
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      	service.fetchIndustryTypes = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchIndustryType(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  

                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
			service.fetchCarParking = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchCarParkingType(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  

                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchSalutationType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchSalutation(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchresidencyType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchResidencyStatus(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchRelationType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchRelationTypes(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchPaymentsType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchPaymentTypes(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetch_CH_PaymentsType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetch_CH_PaymentTypes(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchFinancesType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchFinanceTypes(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchBuyingPurposeType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchBuyingPurpose(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchLeadSourceType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchLeadSource(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchRefferedByType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchRefferedBy(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	      service.fetchChannelPartnerType = function(){

	         var defer = $q.defer();
	         
	         AppFormController.fetchChannelPartner(function(result, event) {

                if (event.status) {
                	
                    defer.resolve(result);
                       
                } else {
                    $log.error(event.message);
     				defer.reject(event.message);
                  
                }
	         },{ buffer: true, escape: true} );  
	         return defer.promise;
	      }
	    console.log(service);
		return service;
	}]);

	app.controller('app',['$compile','$q','$scope','NumaanFactory','$filter', function($compile,$q,$scope,NumaanFactory,$filter) {

		alertify.defaults = {
        // dialogs defaults
        autoReset:true,
        basic:false,
        closable:true,
        closableByDimmer:true,
        frameless:false,
        maintainFocus:true, // <== global default not per instance, applies to all dialogs
        maximizable:true,
        modal:true,
        movable:true,
        moveBounded:false,
        overflow:true,
        padding: true,
        pinnable:true,
        pinned:true,
        preventBodyShift:false, // <== global default not per instance, applies to all dialogs
        resizable:true,
        startMaximized:false,
        transition:'pulse',

        // notifier defaults
        notifier:{
            // auto-dismiss wait time (in seconds)  
            delay:5,
            // default position
            position:'bottom-right'
        },

        // language resources 
        glossary:{
            // dialogs default title
            title:'',
            // ok button text
            ok: 'OK',
            // cancel button text
            cancel: 'Cancel'            
        },

        // theme settings
        theme:{
            // class name attached to prompt dialog input textbox.
            input:'ajs-input',
            // class name attached to ok button
            ok:'ajs-ok',
            // class name attached to cancel button 
            cancel:'ajs-cancel'
        }
    };
		Array.prototype.remove = function(value) {
		    if (this.indexOf(value)!==-1) {
		       this.splice(this.indexOf(value), 1);
		       return true;
		   } else {
		      return false;
		   };
		}
		console.log('opp');
		console.log(opp);
		
		console.log('sometext');
		console.log(sometext);
		$scope.GenralPowerOfAttorneyy=sometext.genralPowerofAttorney;
		console.log('sometext');
		console.log($scope.GenralPowerOfAttorneyy);
		$scope.CarParkCharges=sometext.carParkValue;
		$scope.otpResult='fail';
		$scope.showOTP=false;
		$scope.formats = ['yyyy-MM-dd', 'yyyy/MM/dd', 'dd-MM-yyyy', 'shortDate'];
  		$scope.format = $scope.formats[2];
  		$scope.OppDateFields=sometext.OppDateFields;
  		$scope.isOtpGenrated=sometext.isOtpGenrated;

  		console.log('isOtpGenrated');
  		console.log($scope.isOtpGenrated);
  		console.log('sometext date');
  		var name="5555";
  		
  		/*console.log($scope.OppDateFields[0]);
  		console.log($scope.OppDateFields[1]);
  		$scope.OppDateFields[0]=new Date($scope.OppDateFields[0]);*/
  		console.log('isprojectHeadExist');
  		console.log(sometext.isprojectHeadExist);
  		$scope.ProjectHead=sometext.isprojectHeadExist;
		$scope.Contact=sometext.contacts;
		$scope.FloorDescription=sometext.floorDescription;
		$scope.Opportunity=sometext.opport;

		$scope.ChannelPartner=sometext.ChannelPartner;
		$scope.RefferedBy=sometext.RefferedBy;
		
		$scope.Account=sometext.Acc;
		$scope.Application_Form__c=sometext.AppForm;
		$scope.Application_Form__c.Project__c=sometext.projectName;
		$scope.Application_Form__c.Plant__c=sometext.plantName;
		$scope.Application_Form__c.Unit__c=sometext.unitName;
		if($scope.Contact[0] != undefined)
		$scope.Application_Form__c.Contact_Name__c=$scope.Contact[0].Name;
		$scope.Plant__c=sometext.plant;
		$scope.Unit__c=sometext.unit;
		if($scope.Contact[0] != undefined)
		$scope.ContactId = $scope.Contact[0].Id;
		$scope.SubmitStatus=(sometext.AppForm.Application_Status__c != undefined) ? sometext.AppForm.Application_Status__c : 'default';
		console.log('submit status');
		console.log($scope.SubmitStatus);
		
		$scope.ExistingLeadSource=$scope.Opportunity.Lead_Source__c;
		$scope.DateFields=sometext.DateFields;
		/*console.log('$scope.ExistingLeadSource');
		console.log($scope.ExistingLeadSource);*/

		$scope.name="Ajeet";
		$scope.refferal='';
		$scope.CarParkTypes=[];
		$scope.SalutationTypes=[];
		$scope.selectedCarParkingType='';
		$scope.ResidencyTypes='';  
		$scope.RelationTypes='';
		$scope.PaymentTypes=''; 
		$scope.CH_PaymentTypes='';
		$scope.FinanceTypes=''; 
		$scope.BuyingPurposeType='';
		$scope.ProjectTypes=[];
		$scope.PlantTypes=[];
		if(sometext.opport.No_of_Car_Park_S__c <= 0)
		$scope.Opportunity.No_of_Car_Park_S__c=0;
		$scope.Opportunity.Car_park_reservation_Charges__c=0;
		$scope.Application_Form__c.Project__c=sometext.projectName;
		$scope.Application_Form__c.Plant__c=sometext.plantName;
		$scope.Application_Form__c.Unit__c=sometext.unitName;
		$scope.changeAggrement = function(){
			
			$scope.Application_Form__c.AGREEMENT_VALUE__c= Math.ceil(($scope.Unit__c.Area__c * $scope.Opportunity.PT_Unit_Price_Agreed__c) + ($scope.Unit__c.Garden_Area_Price__c * $scope.Unit__c.Garden_Area__c) + ($scope.Unit__c.Terrace_Area_Price__c * $scope.Unit__c.Terrace_Area__c) + $scope.Opportunity.Car_park_reservation_Charges__c);
		 	console.log('Asdf');
		 	console.log($scope.Application_Form__c.AGREEMENT_VALUE__c);
		 }
		 $scope.changeAggrement();
		 $scope.changeCarPark = function(){
		 	if($scope.CarParkCharges != undefined && $scope.CarParkCharges != null)
        	$scope.Opportunity.Car_park_reservation_Charges__c=$scope.Opportunity.No_of_Car_Park_S__c * $scope.CarParkCharges;
        	$scope.changeAggrement();
        }
        $scope.changeCarPark();
		{
			var temp=[];
			angular.forEach($scope.DateFields, function(value, key){
						
						console.log('va');
						console.log(value);
						value = (value=='') ? null:new Date(value);
						temp.push(value);
						/*if(value != '' && value != null)
						{value=new Date(value);
												temp.push(value);}else{
													value=null;
												}*/

	        });
	        $scope.DateFields=temp;
		}
		console.log('DateFields@@@@@@2');
		console.log($scope.DateFields);
		{
			var temp=[];
			angular.forEach($scope.OppDateFields, function(value, key){
						
						console.log('va');
						console.log(value);
						if(value != '' && value != null)
						{value=new Date(value);
												temp.push(value);}

	        });
	        $scope.OppDateFields=temp;
		}
		
		angular.forEach(sometext.plantsToProject, function(value, key){
					
					$scope.ProjectTypes.push(key);

        });
        console.log('$scope.ProjectTypes');
        console.log($scope.ProjectTypes);
		$scope.cancle = function(){
			
			top.location.href = '/'+opp;		
		}
		$scope.OtpGenration = function (flag){
			$scope.showOTP=flag;
			$scope.otp='';
			NumaanFactory.genrateOTP($scope.ContactId).then(function(response){

				   console.log(response);
				   if(response == 'done')
				   	alertify.alert('OTP has been genrated');
				  },
				  function(error){

				});

		}
		$scope.showSumitbuttononOtp = function(){
			if($scope.showOTP){
				if($scope.otpResult == 'done')
				return false;
				else
				return true;
			}else{
				return true;
			}
			
		}
		$scope.OtpVerification =  function(){
			console.log('otp');
			console.log(opp);
			NumaanFactory.verifyOTP(opp,$scope.ContactId,$scope.otp).then(function(response){

				   console.log(response);
				   if(response == 'done'){
				   	$scope.otpResult=response;
				   	alertify.alert('OTP has been verified');
				   	$scope.Opportunity.OTP_Generated__c=true;
				   	$scope.isOtpGenrated=true;
				   	console.log('$scope.isOtpGenrated');
				   	console.log($scope.isOtpGenrated);
				   }else{
				   	$scope.otpResult='fail';
				   	 alertify.alert('OTP verification failed. Please generate OTP again');
				   }
				  
				  },
				  function(error){

				});
		}

        $scope.ChangePlant = function(){
        	angular.forEach(sometext.plantsToProject, function(value, key){
					$scope.PlantTypes=[];
					if(key == $scope.Application_Form__c.Project__c){
						
						angular.forEach(value, function(value1, key1){

							$scope.PlantTypes.push(value1);
						}
						);
					}
					
        		});
        		

        }

        
        
        $scope.ChangeUnit = function(){
        	angular.forEach(sometext.unitsToPlant, function(value, key){
					$scope.UnitTypes=[];
					if(key == $scope.Application_Form__c.Plant__c){
						
						angular.forEach(value, function(value1, key1){

							$scope.UnitTypes.push(value1);
						}
						);
					}
					//console.log('unit');
					//console.log($scope.UnitTypes);

        		});
        	
        }
        $scope.ChangePlant();
        $scope.ChangeUnit();
        console.log('$scope.PlantTypes');
        console.log($scope.PlantTypes);
        console.log('$scope.UnitTypes');
        console.log($scope.UnitTypes);

		NumaanFactory.fetchIndustryTypes().then(function(response){

		   $scope.IndustryTypes = response;
			 /*  angular.forEach($scope.IndustryTypes, function(key,value) {
				// body...
				console.log('key');
				console.log(key);
				key=key.replace('amp;','');
				console.log('key again');
				console.log(key);
				});*/

		  },
		  function(error){

		});
		
		NumaanFactory.fetchCarParking().then(function(response){

		   $scope.CarParkTypes = response;
		   console.log('$scope.CarParkTypes');
		   console.log($scope.CarParkTypes);

		  },
		  function(error){

		});
		NumaanFactory.fetchSalutationType().then(function(response){

		   $scope.SalutationTypes = response;
		   $scope.SalutationTypes.remove('Lt Col.');
		   
		  },
		  function(error){

		});
		NumaanFactory.fetchresidencyType().then(function(response){

		   $scope.ResidencyTypes = response;
		   
		  },
		  function(error){

		});
		NumaanFactory.fetchRelationType().then(function(response){

		   $scope.RelationTypes = response;
		   
		  },
		  function(error){

		});
		NumaanFactory.fetchPaymentsType().then(function(response){

		   $scope.PaymentTypes = response;
		   
		  },
		  function(error){

		});
		NumaanFactory.fetch_CH_PaymentsType().then(function(response){

		   $scope.CH_PaymentTypes = response;
		   
		  },
		  function(error){

		});
		NumaanFactory.fetchFinancesType().then(function(response){

		   $scope.FinanceTypes = response;
		   
		  },
		  function(error){

		});
		NumaanFactory.fetchBuyingPurposeType().then(function(response){

		   $scope.BuyingPurposeType = response;
		   
		  },
		  function(error){

		});
		NumaanFactory.fetchLeadSourceType().then(function(response){

		   $scope.LeadSourceType = response;
		   $scope.LeadSourceType.remove('Agents');
		   $scope.LeadSourceType.remove('Referral');
		   console.log('LeadSourceType');
		   console.log($scope.LeadSourceType);
		   
		  },
		  function(error){

		});
		$scope.Opportunity.LeadSource=sometext.opport.Lead_Source__c;
		console.log('$scope.Opportunity.LeadSoure');
		console.log($scope.Opportunity.LeadSoure);

		/*NumaanFactory.fetchRefferedByType().then(function(response){

		   $scope.RefferedByType = response;
		   
		   
		  },
		  function(error){

		});*/
		NumaanFactory.fetchChannelPartnerType().then(function(response){

		   $scope.ChannelPartnerType = response;
		   
		   
		  },
		  function(error){

		});
		$scope.ChangeAddress = function(){
			if($scope.Account.Same_as_Correspondence_Address__c == true){
				$scope.Account.A_Street_1__c	=$scope.Account.Street1__c;
				$scope.Account.A_Street_2__c	=$scope.Account.Street2__c;
				$scope.Account.A_Street_3__c	=$scope.Account.Street3__c;
				$scope.Account.A_City__c		=$scope.Account.City__c;
				$scope.Account.A_Postal_Code__c	=$scope.Account.Postal_Code__c;
				$scope.Account.A_District__c	=$scope.Account.District__c;
				//$scope.Account.A_State			=$scope.Account.State;
				//$scope.Account.A_Country		=$scope.Account.Country;
				$scope.Account.A_MobilePhone__c	=$scope.Account.MobilePhone__c;
			}else{
				$scope.Account.A_Street_1__c	='';
				$scope.Account.A_Street_2__c	='';
				$scope.Account.A_Street_3__c	='';
				$scope.Account.A_City__c		='';
				$scope.Account.A_Postal_Code__c	='';
				$scope.Account.A_District__c	='';
				//$scope.Account.A_State			='';
				//$scope.Account.A_Country		='';
				$scope.Account.A_MobilePhone__c	='';
			}
		}
		
		var errorMsg = 'aaaaaaaaaaa'; 

		$scope.validateFormDetails = function() {
            
        	if($scope.ProjectForm.Super_Built_Area != '' || $scope.ProjectForm.Super_Built_Area != undefined) {
	            if($scope.ProjectForm.Super_Built_Area.$error.pattern) {
	            errorMsg ='Super built Area is not a valid Number';
	            
	            return false;
        		}
        	}
        	if($scope.ProjectForm.Apt_Unit_Price_Agreed != '' || $scope.ProjectForm.Apt_Unit_Price_Agreed != undefined) {
	            if($scope.ProjectForm.Apt_Unit_Price_Agreed.$error.pattern) {
	            errorMsg ='Apt unit price agreed is not a valid Number';
	            
	            return false;
        		}
        	}
        	if($scope.ProjectForm.Pvt_Terrace_Garden_Area != '' || $scope.ProjectForm.Pvt_Terrace_Garden_Area != undefined) {
	            if($scope.ProjectForm.Pvt_Terrace_Garden_Area.$error.pattern) {
	            errorMsg='Pvt terrace garden area is not a valid Number';
	            return false;
        		}
        	}
        	if($scope.ProjectForm.Pvt_Terrace_Garden_Price_Agreed != '' || $scope.ProjectForm.Pvt_Terrace_Garden_Price_Agreed != undefined) {
	            if($scope.ProjectForm.Pvt_Terrace_Garden_Price_Agreed.$error.pattern) {
	            errorMsg='Pvt terrace garden price agreed is not a valid Number';
	            return false;
        		}
        	}
        	if($scope.ProjectForm.no_of_car_parks != '' || $scope.ProjectForm.no_of_car_parks != undefined) {
	            if($scope.ProjectForm.no_of_car_parks.$error.pattern) {
	            errorMsg='No of car parks is not a valid Number';
	            return false;
        		}
        	}
        	if($scope.ProjectForm.Car_Park_Reservation_Charges != '' || $scope.ProjectForm.Car_Park_Reservation_Charges != undefined) {
	            if($scope.ProjectForm.Car_Park_Reservation_Charges.$error.pattern) {
	            errorMsg='Car park reservation charges is not a valid Number';
	            return false;
        		}
        	}
        	if($scope.ProjectForm.Club_House_Fee != '' || $scope.ProjectForm.Club_House_Fee != undefined) {
	            if($scope.ProjectForm.Club_House_Fee.$error.pattern) {
	            errorMsg='Club house fee is not a valid Number';
	            return false;
        		}
        	}
        	if($scope.ProjectForm.Agreement_Value != '' || $scope.ProjectForm.Agreement_Value != undefined) {
	            if($scope.ProjectForm.Agreement_Value.$error.pattern) {
	            errorMsg='Agreement value is not a valid Number';
	            return false;
        		}
        	}
            
			if($scope.ContactForm0.dob0.$error.required) {
            errorMsg='DOB of First Applicant mandatory';return false;
        	}if($scope.ContactForm0.pan0.$error.required) {
            errorMsg='Pan No. of First Applicant is mandatory.';return false;
        	}if($scope.ContactForm0.email0 != '' || $scope.ContactForm0.email0 != undefined) {
        		if($scope.ContactForm0.email0.$error.pattern){
        			errorMsg='Enter Valid Email for of First Applicant';return false;
        		}
            }if($scope.ContactForm0.Phone0 !='' || $scope.ContactForm0.Phone0 != undefined) {
            	if($scope.ContactForm0.Phone0.$error.pattern){
            		errorMsg='Phone of First Applicant must be of 10 digits.';return false;
            	}
        	}if($scope.ContactForm0.Nationality0.$error.required) {
            errorMsg='Nationality of First Applicant is mandatory.';return false;
        	}
        	if($scope.Contact[1] != undefined){
        		if($scope.ContactForm1.dob1.$error.required) {
	            	errorMsg='DOB of  Second Applicant is mandatory';return false;
	        	}if($scope.ContactForm1.pan1.$error.required) {
	            	errorMsg='Pan No. of Second Applicant is mandatory.';return false;
	        	}if($scope.ContactForm1.email1 != '' || $scope.ContactForm1.email1 != undefined) {
        		if($scope.ContactForm1.email1.$error.pattern){
        			errorMsg='Enter Valid Email for Second  Applicant';return false;
        		}
            	}if($scope.ContactForm1.Phone1 !='' || $scope.ContactForm1.Phone1 != undefined) {
            	if($scope.ContactForm1.Phone1.$error.pattern){
            		errorMsg='Phone of Second  Applicant must be of 10 digits.';return false;
            	}
        		}if($scope.ContactForm1.Nationality1.$error.required) {
	            	errorMsg='Nationality of Second  Applicant is mandatory.';return false;
	        	}
        	}
        	if($scope.Contact[2] != undefined){
        		
	        	if($scope.ContactForm.dob2.$error.required) {
	            errorMsg='DOB  of Third Applicant is mandatory';return false;
	        	}if($scope.ContactForm.pan2.$error.required) {
	            errorMsg='Pan No. of Third Applicant is mandatory.';return false;
	        	}if($scope.ContactForm.email2 != '' || $scope.ContactForm.email2 != undefined) {
        		if($scope.ContactForm.email2.$error.pattern){
        			errorMsg='Enter Valid Email for of Third Applicant';return false;
        		}
            	}if($scope.ContactForm.Phone2 !='' || $scope.ContactForm.Phone2 != undefined) {
            	if($scope.ContactForm.Phone2.$error.pattern){
            		errorMsg='Phone of of Third Applicant must be of 10 digits.';return false;
            	}
        		}if($scope.ContactForm.Nationality2.$error.required) {
	            errorMsg='Nationality of Third Applicant is mandatory.';return false;
	        	}

        	}
        	if($scope.Paymentdetails.Earnest_Amount != '' || $scope.Paymentdetails.Earnest_Amount != undefined){
        		if($scope.Paymentdetails.Earnest_Amount.$error.pattern) {
	            errorMsg='Earnest Amount is not a valid Number';
	            return false;
        		}
        	}
        	if($scope.Paymentdetails.CH_Amount != '' || $scope.Paymentdetails.CH_Amount != undefined){
        		if($scope.Paymentdetails.CH_Amount.$error.pattern) {
	            errorMsg='Earnest Amount is not a valid Number';
	            return false;
        		}
        	}
        	if($scope.CorrespondenceAddressDetails.pin !='' || $scope.CorrespondenceAddressDetails.pin != undefined){
        		if($scope.CorrespondenceAddressDetails.pin.$error.pattern) {
	            errorMsg='Postal Code / Pin must be of 6 digits.';
	            return false;
        		}
        	}
        	if($scope.CorrespondenceAddressDetails.Phone !='' || $scope.CorrespondenceAddressDetails.Phone != undefined){
        		if($scope.CorrespondenceAddressDetails.Phone.$error.pattern) {
	            errorMsg='Phone must be of 10 digits';
	            return false;
        		}
        	}
        	if($scope.PermanentAddressDetails.pin !='' || $scope.PermanentAddressDetails.pin != undefined){
        		if($scope.PermanentAddressDetails.pin.$error.pattern) {
	            errorMsg='Postal Code / Pin must be of 6 digits.';
	            return false;
        		}
        	}
        	if($scope.PermanentAddressDetails.Phone != '' || $scope.PermanentAddressDetails.Phone != undefined){
        		if($scope.PermanentAddressDetails.Phone.$error.pattern) {
	            errorMsg='Phone must be of 10 digits';
	            return false;
        		}
        	}
        	if( $scope.GenralPowerOfAttorney.pin != '' || $scope.GenralPowerOfAttorney.pin != undefined){
        		if($scope.GenralPowerOfAttorney.pin.$error.pattern) {
	            errorMsg='Postal Code / Pin must be of 6 digits.';
	            return false;
        		}
        	}
        	if($scope.GenralPowerOfAttorney.email !='' || $scope.GenralPowerOfAttorney.email != undefined){
        		if($scope.GenralPowerOfAttorney.email.$error.pattern) {
	            errorMsg='Enter a valid Email.';
	            return false;
        		}
        	}
        	if($scope.GenralPowerOfAttorney.Phone !='' || $scope.GenralPowerOfAttorney.Phone !=undefined){
        		if($scope.GenralPowerOfAttorney.Phone.$error.pattern) {
	            errorMsg='Phone must be of 10 digits.';
	            return false;
        		}
        	}
        	if($scope.Opportunity.Referred_By_Name_Text__c != undefined && $scope.Opportunity.Referred_By_Name_Text__c !=null &&  $scope.ChannelPartner=='' && $scope.Opportunity.LeadSource =='')
        	if($scope.SourceofEnquiry.refferedbyname !='' || $scope.SourceofEnquiry.refferedbyname !=undefined){
	        	if($scope.SourceofEnquiry.refferedbyname.$error.required) {
		            errorMsg='Refferd By field is mandatory.';
		            return false;
	        	}
        	}
        	if($scope.ChannelPartner != undefined && $scope.ChannelPartner !=null && $scope.SourceofEnquiry.ChannelPartnerName != undefined && $scope.RefferedBy=='' && $scope.Opportunity.LeadSource =='')
        	if($scope.SourceofEnquiry.ChannelPartnerName !='' || $scope.SourceofEnquiry.ChannelPartnerName !=undefined){
	        	if($scope.SourceofEnquiry.ChannelPartnerName.$error.required) {
		            errorMsg='Channel Partner field is mandatory.';
		            return false;
	        	}
        	}

        	if( $scope.ProjectHead == null){
        		errorMsg='Project Head for Selected Plant Does not Exist.';
		            return false;
        	}
        	
        		console.log('nooooooooooooooo errorrrrrrrrrrrrr');
        		return true;
        	
        	
             
        } 
        $scope.ChangeProjectsDetails = function(){
        	
        	if($scope.Application_Form__c.Project__c != '' && $scope.Application_Form__c.Plant__c != '' && $scope.Application_Form__c.Unit__c != ''){
	        	NumaanFactory.ChangeProjectDetails(opp,$scope.Application_Form__c.Project__c,$scope.Application_Form__c.Plant__c,$scope.Application_Form__c.Unit__c).then(function(response){

			   		console.log('@@@@@Response');
			   		console.log(response);
			   			angular.forEach(response, function(value, key){
							console.log('key');
							console.log(key);
							console.log('value');
							console.log(value);
							if(key == 'Area')
							$scope.Unit__c.Area__c = value;
							if(key == 'TerraceArea')
							$scope.Unit__c.Terrace_Area__c = value;
							if(key == 'GardenArea')
							$scope.Unit__c.Garden_Area__c = value;
							if(key == 'ClubHouseFee')
							$scope.Plant__c.Club_Membership__c = value;
						
	        			});
			   		
			  		},
			  		function(error){
			  			alertify.alert('Some Error occured ! Try Again' +error);
				});
	    	}
        }
		$scope.Save = function(boolflag){
			
			$scope.flag=boolflag;
			$scope.Contact=NumaanFactory.removeAngularjsKey($scope.Contact);
			$scope.GenralPowerOfAttorneyy=NumaanFactory.removeAngularjsKey($scope.GenralPowerOfAttorneyy);
			if($scope.Channel_Partner__c != undefined)
			delete $scope.Channel_Partner__c["attributes"];
			if($scope.Account != undefined)
			delete $scope.Account["attributes"];
			/*if($scope.Contact[0] != undefined)
			delete $scope.Contact[0]["attributes"];
			if($scope.Contact[1] != undefined)
			delete $scope.Contact[1]["attributes"];
			if($scope.Contact[2] != undefined)
			delete $scope.Contact[2]["attributes"];*/
			if($scope.GenralPowerOfAttorneyy != undefined)
			delete $scope.GenralPowerOfAttorneyy["attributes"];
			if($scope.Contact[0] != undefined)
			delete $scope.Contact[0]["attributes"];
						
			/*if($scope.Contact.Channel_Partner__r[0] != undefined)
			delete $scope.Contact.Channel_Partner__r[0]["attributes"];*/

			if($scope.Contact[1] != undefined)
			delete $scope.Contact[1]["attributes"];
						
		/*	if($scope.Contact.Channel_Partner__r[1] != undefined)
			delete $scope.Contact.Channel_Partner__r[1]["attributes"];
*/
			if($scope.Contact[2] != undefined)
			delete $scope.Contact[2]["attributes"];

			if($scope.Opportunity.Channel_Partner__r != undefined)
			delete $scope.Opportunity.Channel_Partner__r["attributes"];
			if($scope.Application_Form__c.Channel_Partner__r != undefined)
			delete $scope.Application_Form__c.Channel_Partner__r["attributes"];
						
			
			if($scope.Opportunity != undefined)
			delete $scope.Opportunity["attributes"];
			if($scope.Opportunity.Plant2__r != undefined)
			delete $scope.Opportunity.Plant2__r["attributes"];
			if($scope.Opportunity.Plant2__r != undefined && $scope.Opportunity.Plant2__r.ProjectLookup__r != undefined)
			delete $scope.Opportunity.Plant2__r.ProjectLookup__r["attributes"];
			if($scope.Opportunity.Unit__r != undefined)
			delete $scope.Opportunity.Unit__r["attributes"];
			if($scope.Application_Form__c != undefined)
			delete $scope.Application_Form__c["attributes"];
			if($scope.Application_Form__c.Referred_by_Name__r != undefined)
			delete $scope.Application_Form__c.Referred_by_Name__r["attributes"];
			if($scope.Unit__c != undefined)
			delete $scope.Unit__c["attributes"];
			if($scope.Plant__c != undefined)
			delete $scope.Plant__c["attributes"];
			if($scope.Opportunity.Referred_by_Name2__r!= undefined)
			delete $scope.Opportunity.Referred_by_Name2__r["attributes"];
			$scope.Opportunity.Id=opp;
			var i=0;
			for(i=0;i<3;i++){
				if($scope.Contact[i] != undefined){
					if($scope.Contact[i].LastName == undefined || $scope.Contact[i].LastName == '')
						$scope.Contact[i].LastName=' ';
				}
			}
			


				if($scope.validateFormDetails() || boolflag != 'true'){ 
				console.log('inside save if')  ;
				console.log('success')  ;
				$scope.Lead=$scope.Opportunity.LeadSource;
				console.log('$scope.Lead');
				console.log($scope.Lead);
				if($scope.Lead == undefined)
				$scope.Lead='';
				if($scope.ChannelPartner == undefined)
				$scope.ChannelPartner='';
				if($scope.RefferedBy == undefined)
				$scope.RefferedBy='';
				if($scope.DateFields.length !=6){
					$scope.DateFields[5]=undefined;
				}
				for (var i = 0;i < 6; i++) {
					if($scope.DateFields[i] == undefined){
						$scope.DateFields[i]='';
					}
				}
				console.log('Asss');
				console.log($scope.GenralPowerOfAttorneyy);
				/*if($scope.GenralPowerOfAttorneyy == null)
					$scope.GenralPowerOfAttorneyy=undefined;*/
				NumaanFactory.saveContact(opp,$scope.Account,$scope.Contact,$scope.Opportunity,$scope.Application_Form__c,$scope.Unit__c,$scope.ExistingLeadSource,$scope.Lead,$scope.Plant__c,$scope.ChannelPartner,$scope.flag,$scope.DateFields,$scope.OppDateFields,$scope.GenralPowerOfAttorneyy).then(function(response){

				   console.log(response);
				   if( response == 'sucess'){
				   	if($scope.flag == true)
				   	alertify.alert('Your request has been submitted sucessfully');
				   if($scope.flag == false)
				   	alertify.alert('Your request has been saved sucessfully');
				   	$scope.cancle();
				   }
				   
				  },
				  function(error){
				  alertify.alert('Some Error occured ! Try Again' +error);
				  //$scope.cancle();
				});
			}else{
						console.log('inside save else')  ;
                       
                        alertify.alert('Error :' +errorMsg);
            }
		}


		

}]);
