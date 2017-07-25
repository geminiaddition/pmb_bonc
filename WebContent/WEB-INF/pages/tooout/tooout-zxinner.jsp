       <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
       
       
       
        <table class="table ">
						
							
								
								<thead>
									<tr style="color: white;">
										<th>IP</th>
										<th style="text-align: center;">应用名称</th>
										<th style="text-align: center;">CPU使用率</th>
										<th style="text-align: center;">内存占用率</th>
										<th style="text-align: center;">根目录使用率</th>
										<th style="text-align: center;">连接状态</th>
									</tr>
								</thead>
								<s:iterator id="getzxinner" value="getzxinner">
								<tbody>
									<tr style="color: white;">
										<td>
												<s:property value="host" /> 
										</td>
									<td align="center">
												<s:property value="projects" /> 
										</td>
										<td align="center">
										<s:if
													test="#getzxinner.cpu_used>=80">
												<span style="background: #FF0000; color: #FFF"><s:property value="cpu_used" />%</span>
												</s:if>
												<s:elseif test="#getzxinner.cpu_used>=75&&#getzxinner.cpu_used<80">
												
												<span style="color: #CC0033"><s:property value="cpu_used" />%</span>
												</s:elseif>
												<s:else><span style="color:rgb(114,220,114)"><s:property value="cpu_used" />%</span></s:else>
										</td>
										<td align="center">
												<s:if
													test="#getzxinner.mem_used>=80">
												<span style="background: #FF0000; color: #FFF"><s:property value="mem_used" />%</span>
												</s:if>
												<s:elseif test="#getzxinner.mem_used>=75&&#getzxinner.mem_used<80">
												
												<span style="color: #CC0033"><s:property value="mem_used" />%</span>
												</s:elseif>
												<s:else><span style="color:rgb(114,220,114)"><s:property value="mem_used" />%</span></s:else>
										
										</td>
										<td align="center">
										<s:if
													test="#getzxinner.root_used_rate>=80">
												<span style="background: #FF0000; color: #FFF"><s:property value="root_used_rate" />%</span>
												</s:if>
												<s:elseif test="#getzxinner.root_used_rate>=75&&#getzxinner.root_used_rate<80">
												
												<span style="color: #CC0033"><s:property value="root_used_rate" />%</span>
												</s:elseif>
												<s:else><span style="color:rgb(114,220,114)"><s:property value="root_used_rate" />%</span></s:else>
												
										</td>
										<td align="center">
											<span style="color:rgb(114,220,114)"><s:property value="ping_stat" /></span>
											
										
										</td>

									</tr>
								</tbody>
							</s:iterator>
						</table>